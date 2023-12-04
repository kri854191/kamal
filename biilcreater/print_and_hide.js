const print_button=document.getElementById("print_hide");
const shop_name=document.querySelector("#shop_name");
const body=document.querySelector("body");


// item to be hide
const add_item_button=document.getElementById("add-item-1");

// this will hide if discount is 0 zero
const final_discount=document.getElementById("final_discount");
const final_discount_text_input_both_field=document.getElementById("final_discount_hide");


const gold_input_button_hide=document.getElementById("gold_input_button_hide");

print_button.addEventListener("click",()=>{
  if(confirm("please check everything is ok :)")){
    add_item_button.style.display="none";
    gold_input_button_hide.style.display="none";
    final_discount.style.border="none"
    if(final_discount.value==""){
      console.log(final_discount.innerText,"discount")
      final_discount_text_input_both_field.style.display="none";

    }
    print_button.style.display="none";
    body.style.backgroundColor="white";


    print()
  }
  
})
shop_name.addEventListener("click",()=>{
  add_item_button.style.display="block";
  gold_input_button_hide.style.display="inline";
  final_discount.style.border="1px solid black"
  final_discount_text_input_both_field.style.display="block";
  print_button.style.display="block"
})