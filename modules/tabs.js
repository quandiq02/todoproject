    window.onload = function () {
        tabChecked();
    }

    let tabBlock1 = document.querySelector('.tasks-block'),
        tabBlock2 = document.querySelector('.category-block'),
        tabTitle1 = document.querySelector('.tab__title-1'),
        tabTitle2 = document.querySelector('.tab__title-2'),
        tab1 = document.querySelector('#tab-1'),
        tab2 = document.querySelector('#tab-2');

    function tabChecked() {
        tabBlock1.style.display = "flex";
        tabBlock2.style.display = "none";
        tabTitle1.style.background = `#2196F3`;
        tabTitle1.style.color = `#fff`;
        tabTitle2.style.background = `#fff`;
        tabTitle2.style.color = `#000`;

    }

    function tabSettings() {
        tab1.addEventListener('change', tabChecked)
        tab2.addEventListener('change', () => {
            tabBlock1.style.display = "none";
            tabTitle1.style.background = `#fff`;
            tabTitle2.style.color = `#fff`;
            tabTitle1.style.color = `#000`;
            tabBlock2.style.display = "flex";
            tabTitle2.style.background = `#2196F3`;
        })
    }

    export {
        tabChecked,
        tabSettings,
    }