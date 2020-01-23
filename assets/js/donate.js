$("document").ready(() => {
    // Donation Metrics
    let donationState = {
        raised: 450,
        target: 600,
        donors: 26
    };

    // Update Progress Bar(s)
    const updateProgress = (raised) => {
        // Update Donation State
        donationState = Object.assign(donationState, { raised });

        let progress = (raised / donationState.target) * 100;

        // Set Initial Value of the progress bar
        $('#progBar').val(raised);
        // Backwards Compatible with older browsers that do not support the progress tag
        $('div.progress-bar > span').css('width', `${progress}%`);
    };

    // Initialize the Max value for the progress bar
    $('#progBar').attr('max', donationState.target);

    // Init Progress Bar Status
    updateProgress(donationState.raised);


    // Handle Donation Form
    $('#donate').click(() => {
        const amount = $('#amount').val();
        // Check Amount is a positive value, not null and not empty
        if (!amount || amount < 1) {
            // Open the Modal with invalid Message
            var anchor = $(event.target);
            anchor.attr('href', '#invalid-modal')
        } else {
            // Set the amount on the modal message
            $("#message-modal span").text(() => {
                return `$${amount}`;
            });

            var anchor = $(event.target);
            // Open the confirm amount modal
            anchor.attr('href', '#confirm-modal');
        }
    });

    // Handle Confirm Donation
    $('#confirm-donation').click(() => {
        const amount = $('#amount').val();
        const updateRaised = JSON.parse(donationState.raised) + JSON.parse(amount);
        updateProgress(updateRaised);

        //@TODO: Display Amount left to complete Raise
        $('span.tool').addClass('show');
        //@TODO: Display toast message to confirm donation was done
        $('#toast').addClass("show");
        setTimeout(() => {
            $('span.tool').removeClass('show');
            $('#toast').removeClass('show');
        }, 2000);

    });

    // on Invalid Modal Close: Set Focus and highlight on Amount Input
    $('#invalid-modal > div > a.modal-close').click(() => {
        $('#amount').focus().css('border', '1px solid red');
    });

    // on Confirm Modal Close: Select Amount Input
    $('#confirm-modal > div > a.modal-close').click(() => {
        $('#amount').select();
    });

    // on Cancel Donation, select for new amount
    $('#cancel-donation').click(() => {
        $('#amount').select();
    });

    // Remove Border on amount input when entered a new amount
    $('#amount').on('input', () => {
        const value = event.target.value;
        if (value) {
            $('#amount').css('border', '1px solid #cccccc');
        }
    });
});

