const tabToStringMap = {
    1: '<iframe src="https://senghounglim.github.io/WebReg2.0/"></iframe>',
    2: '',
    3: '<iframe src="https://hassannajj.github.io/color-guessr/"></iframe>',
    4: '',
  };
  

function toggleTab(num) {
    // Turn off all other tabs

    const expandedElements = document.querySelectorAll('.expanded');

    expandedElements.forEach(element => {
        element.classList.remove('expanded');
      });


    // Expand tab with number

    const tab = document.getElementById(`project-tab${num}`);
    const bottomSection = tab.querySelector('.bottom-section')
    bottomSection.classList.add('expanded');


    // Display the window
    const displaySquare = document.getElementById('display-square');
    displaySquare.innerHTML = tabToStringMap[num];
}


