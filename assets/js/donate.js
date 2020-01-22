$("document").ready(() => {
    // Donation Metrics
    const donationState = {
        raised: 450,
        target: 600,
        donors: 26
    };

    let progress = (donationState.raised / donationState.target) * 100;
    // Set the Max value for the progress bar
    $('#progBar').attr('max', donationState.target);
    // Set Initial Value of the progress bar
    $('#progBar').val(donationState.raised);
    // Backwards Compatible with older browsers that do not support the progress tag
    $('div.progress-bar > span').css('width', `${progress}%`);

    // Handle Donation Form
    $('#donate').click(() => {
        const amount = $('#amount').val();
        // Check Amount is a positive value, not null and not empty
        if (!amount || amount < 1) {
            console.log('Amount to donate is invalid');

            // Open the Modal with invalid Message
            var anchor = $(event.target);
            anchor.attr('href', '#invalid-modal')

        } else {
            // Set the amount on the message
            $("#message-modal span").text(() => {
                return `$${amount}`;
            });

            var anchor = $(event.target);
            // Open the confirm amount modal
            anchor.attr('href', '#confirm-modal');

            // const res = confirm(`Are you sure you want to donate ${amount}`);
            console.log('display modal');
        }
    });

    // on Invalid Modal Close: Set Focus and highlight on Amount Input
    $('#invalid-modal > div > a.modal-close').click(() => {
        $('#amount').focus().css('border', '1px solid red');
    });

    // on Confirm Modal Close: Select Amount Input
    $('#confirm-modal > div > a.modal-close').click(() => {
        $('#amount').select();
    });

    // Remove Border on user input
    $('#amount').on('input', () => {
        const value = event.target.value;
        if (value) {
            $('#amount').css('border', '1px solid #cccccc');
        }
    })
})
