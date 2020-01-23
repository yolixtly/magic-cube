$("document").ready(() => {
    // Donation Metrics
    let donationState = {
        raised: 450,
        target: 600,
        donors: 26,
        init: true
    };

    // Update Progress Bar(s)
    const updateProgress = (raised) => {
        // Update Donation State
        donationState = Object.assign(donationState, { raised });

        const { target, init, donors } = donationState;
        let progress = (raised / target) * 100;

        // Set Initial Value of the progress bar
        $('#progBar').val(raised);
        // Backwards Compatible with older browsers that do not support the progress tag
        $('div.progress-bar > span').css('width', `${progress}%`);

        // Update Donor Count
        const updateDonors = init ? donors : donors + 1;
        $('span.donorCount').text(() => {
            return updateDonors;
        });
        donationState = Object.assign(
            donationState,
            {
                donors: updateDonors,
                init: false
            });
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

        // Clean up Amount Input
        $('#amount').val('');

        // Display Amount left to complete Raise
        $('span.tool').addClass('show');
        // Display toast message to confirm donation was done
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

