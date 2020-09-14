
// sets random bg behind logo in the top of the website
// ------
var list_of_images = ["bg1.jpg", "bg2.jpg", "bg3.jpg"];
function set_random_bg_image() {
    // choose random index from list_of_images
    var random = Math.floor(Math.random() * list_of_images.length);
    // this is only box with label, not the text
    var element = document.getElementsByClassName("label")[0];
    // those CSS 'linear-gradient' funcs made to darken the background a bit
    element.style.background = 'linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url('+list_of_images[random]+')';
    // if we don't set this value every time we changing background, it won't cover the entire screen
    element.style.backgroundSize = 'cover';
};
// ------ end


// changes text in label every 5 seconds
// ------
var labels = ["Web Dev", "Back-End", "Web Design", "Front-End"]; // text to change (changes consistently, not randomly)
var label_index = 0;
var changing_interval = 5000; // in milliseconds
// here label disappears
function change_label(){
    label_index++;
    if(label_index == labels.length){label_index = 0;};
    document.getElementById("label_inner").style.opacity = 0;
     // before changing the text we need to wait before label disappears
    setTimeout(change_label_text, 500);
};
// here label appears back with changed text
function change_label_text(){
    document.getElementById("label_inner").textContent = labels[label_index];
    document.getElementById("label_inner").style.opacity = 1;
    setTimeout(change_label, changing_interval);
};
// ------ end

set_random_bg_image();
setTimeout(change_label, 4000);
