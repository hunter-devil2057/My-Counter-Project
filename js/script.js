// Creating Variable for a number
let num=0;
// Reason to use let: value of variable 'num' varies i.e, may increase, decrease or get reset
const value=document.querySelector(".value");       //This is for span of class "value"
const btns=document.querySelectorAll(".btn");      //This is for button of class "btn"
// Here, querySelectorAll is used because it needs to deal with more than one buttons....
// "querySelectorAll" method returns all the elements in the document that matches the specified CSS Selectors and return it as a static node list object...
// NodeList Object represents a collection of nodes, and all the nodes can be accessed by index numbers(which starts with Zero(0)).....
// Here, We can look through the buttons in teh node list by using for-each method.
btns.forEach((btn)=>{
    btn.addEventListener("click", (event)=>{
        const styles=event.currentTarget.classList
        if(styles.contains("btn-danger"))
        {
            num--;
        }
        else if(styles.contains("btn-success"))
        {
            num++;
        }
        else
        {
            num=0;
        }
        value.textContent=num;
        // Adding Color Effects to Number in Counter
        if(num>0)
        {
            value.style.color="green";
        }
        else if(num<0)
        {
            value.style.color="red";
        }
        else
        {
            value.style.color="black";
        }
        // Here, the textContent Property sets or returns the text content of the specified node.
        // Similar to innerText Property
        // Difference between textContent And innerText:
        //      textContent returns the text content of all the elements, while inner text returns the content of all the elements..

    })
})