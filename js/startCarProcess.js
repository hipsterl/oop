function startCarProcess(containerId) {

    function render() {
        let container = document.getElementById(containerId);
        container.innerHTML = `
    <div class='car'>
        <div class="info-panel">
           <label>status:</label><span data-role='status'>off</span>
        </div>
        <div class="controls">
           <input data-role='start-car' type='button' value='Start'>
           <hr>
           <label>Gear box:</label><span data-role='gear-box-value'>N</span>
        </div>
    </div>
    `;
    }

    function carStartListener() {
        let randomNumber = Math.random();

        if (randomNumber > 0.5) {
            carStarted();
        } else {
            carCannotBeStarted();
        }
    }
 
    function drawStatus(status) {
        // for (let i = 0; i < statusLabels.lengt; i++) {
        //     const statusLabel = statusLabels [i];
        //     statusLabel.innerHTML = status;
        // }
        processEls(statusLabels, function (item) {
            item.innerHTML = status;
        }
        );
    }

    function processEls(arrayOfEls, processor) {
        for (let i = 0; i < arrayOfEls.length; i++) {
            const item = arrayOfEls[i];
            processor(item);
        }
    }

    function devLog(message) {
        // console.log(message);
    }

    function carStarted() {
        drawStatus('Car has started');
        devLog('Car has started');
        processEls(startButtons, function (startButton) {
            startButton.classList.add('hide');
        });

        gearBoxStarted();

        plannedCrashStarted();

        devLog('we wait crash');
    }

    function carCannotBeStarted() {
        devLog('Something wrong');
        drawStatus('Car can\'t be started. Try again!');
    }

    function gearBoxStarted() {
        let gearBoxValue = 1;



        processEls(gearBoxValueLabels, function (gearBoxValueLabel) {
            gearBoxValueLabel.innerHTML = gearBoxValue;
        });




        function incrementGearBoxValue() {
            if (gearBoxValue < 5) {
                gearBoxValue++;

                processEls(gearBoxValueLabels, function (gearBoxValueLabel) {
                    gearBoxValueLabel.innerHTML = gearBoxValue;
                });

            }
        }

        gearBoxInterval = window.setInterval(incrementGearBoxValue, 1000);
    }

    function plannedCrashStarted() {
        function engineCrashed() {
            devLog('engine crashed');
            drawStatus('Engine has crashed. Car has stopped');

            processEls(startButtons, function (startButton) {
                startButton.classList.remove('hide');
            });

            processEls(gearBoxValueLabels, function (gearBoxValueLabel) {
                gearBoxValueLabel.innerHTML = 'N';
            });

            window.clearInterval(gearBoxInterval);
        }

        window.setTimeout(engineCrashed, 3000);
    }

    render();

    let gearBoxInterval;
    let startButtons = document.getElementById(containerId).querySelectorAll("[data-role='start-car']");
    let statusLabels = document.getElementById(containerId).querySelectorAll("[data-role='status']");
    let gearBoxValueLabels = document.getElementById(containerId).querySelectorAll("[data-role='gear-box-value']");


    processEls(startButtons, function (startButton) {
        startButton.addEventListener('click', carStartListener);

    });

}



