import { functionObj } from "./function_obj.js";
import { colorArr } from "./array.js";

export const root = document.getElementById('root');
console.dir(root);
console.log(root);

export const container = document.getElementById('container');
console.dir(container);

export const titleBox = document.getElementById('title-box');
export const writerBox = document.getElementById('writer-box');


container.addEventListener('click', function() {
    const remove = container.parentNode.removeChild(container);
    // console.log(remove);
    functionObj.createElement('div', root);
    const newContainer = root.children[0];
    // console.log(newContainer);
    functionObj.boxStyle(newContainer, '95%', '90%', colorArr[0]);
    functionObj.flex(newContainer,'flex-start', 'flex-end');

    functionObj.createElement('p', newContainer);
    const txtBox = newContainer.children[0];
    console.log(txtBox);
    functionObj.size(txtBox, '60%', '20%');
    functionObj.flex(txtBox, 'center', 'center');
    txtBox.textContent = 'If you’re curious about my story, please read it to the end even if you’re bored.';

    let boolean = true;

    if(boolean === true){
        root.addEventListener('click', function() {
            
        });
    };


});

