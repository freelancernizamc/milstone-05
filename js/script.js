

  let firstName= 'Nizam';
  let lastName = 'uddin';
  let titleOfModule = firstName+ ' ' + lastName;
  const name = document.getElementById('name');
  name.innerText = 'DOCUMENT OBJECT MODEL';
  document.getElementById('name').style.backgroundColor ='black';
  document.getElementById('name').style.color ='purple';
  document.getElementById('name').style.fontSize ='50px';
  document.getElementById('name').style.textAlign ='center';

// Video 25-0 What matters in this milestone
// Video 25-1 What is dom, Connect your JS file with html file
// 25-2 Traversing dom - getElementsByTagName
// const student = {
//   name: 'Nizam',
//   ID: 10,
//   study: function (time){
//     console.log(time, 'study kortece');
//   }
  
//  }
// document.getElementsByTagName('h1');
// const liCollection = document.getElementsByTagName('li');
// console.log(liCollection);
// for (const li of liCollection){
//   console.log(li.innerText);
// }
// const allHeadings = document.getElementsByTagName('h3');
// for (const h3 of allHeadings){
//   console.log(h3.innerText);
// }

// Video 25-3 Traversing dom - getElementByClass VS getElementById

// const fruitsTitle = document.getElementById('fruits-title');
// fruitsTitle.innerText = 'Fruits changed by JS';


// const places = document.getElemenstsByClassName('important-places');
// for(const place of places){
// console.log(places.innerText);

// }

// Video 25-4 Traversing dom - getElementByQuerySelector, querySelectorAll

// querySelectorAll
// const someLi = document.querySelectorAll('.fruits-container li');
// // console.log(someLi);
// for(const li of someLi){
//   console.log(li.innerText);
// }


// Video 25-5 Dynamic style, getAttribute, setAttribute, innerText, innerHTML

// document.getElementById('places-title').style.color = 'red';

// Video 25-6 Styling dom properties, add and remove css class using JS
const sections = document.querySelectorAll('section');
// console.log(sections);
for(const section of sections){
  section.style.border ='2px solid steelblue';
  section.style.marginBottom ='5px';
  section.style.borderRadius = '15px';
  section.style.backgroundColor = 'lightgray';
  section.style.paddingLeft = '7px';
} 
// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'yellow';
placesContainer.classList.add('text-center');
placesContainer.classList.remove('text');

// Video 25-7 NodeList, htmlcollection, parentNode, childnodes, createElement
// Video 25-8 Create HTML elements using Javascript and appendChild
// const placesList = document.getElementById('places-list');
// // what to be added
// const li = document.createElement('li');
// li.innerText = 'pahartoli shalbon';
// // add the child
// placesList.appendChild(li);


const main = document.getElementById('main-container');
   const section = document.createElement('section');
   section.innerHTML = `
   <h1>24-9 Module summary (DOM Review)</h1>
  `
   main.appendChild(section);

  //  Video 24-9 Module summary (DOM Review)

  const quiz = document.getElementById('quiz');
  quiz.innerText = 'QUIZ';
  document.getElementById('quiz').style.backgroundColor ='black';
  document.getElementById('quiz').style.color ='purple';
  document.getElementById('quiz').style.fontSize ='50px';
  document.getElementById('quiz').style.textAlign ='center';

  // From tutorial
  // 
  // const startTime = performance.now();
  // for(let i = 0; i <= 50; i++){
  //   console.log(i);
  // }
  // const endTime = performance.now();
  // console.log(`loop took ${endTime - startTime} milliseconds to finish`);