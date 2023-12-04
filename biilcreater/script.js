let add_item_1 = document.getElementById('add-item-1');

// icritical info will stred in object so understand in future and easily debug it
const info_bank = {
  gold_rate_daily_update_date_id_in_localstrorage: 'gold_rate_update_date',
  gold_rate_24k_id_localstorage: 'Daily_gold_rate_24k',
  discount_id_in_html: 'final_discount',
  all_total_amount_id_in_html: 'all_total_amount',
};
const i = info_bank;

// let display=document.getElementById("data-head");

let body = document.querySelector('body');

const add_item_arr = [];
const total_amount = [];

//gold rate section (note gold rate will store in local storage)
const gold_rate_24k_button = document.getElementById(
  'update_gold_rate24k_button'
);
const gold_rate_24k = document.getElementById('update_gold_rate24k');

//gold rate update by localstorage
const display_gold_rate_24k_span =
  document.getElementById('gold_rate_24k_span');
const display_gold_rate_22k_span =
  document.getElementById('gold_rate_22k_span');

const display_gold_rate_18k_span =
  document.getElementById('gold_rate_18k_span');

if (localStorage.getItem('Daily_gold_rate_24k') == undefined) {
  // alert("pleas update daily gold rate")
} else {
  display_gold_rate_24k_span.innerText = Number(
    localStorage.getItem('Daily_gold_rate_24k')
  );
  display_gold_rate_22k_span.innerText = Math.floor(
    (Number(localStorage.getItem('Daily_gold_rate_24k')) * 91.6) / 100
  );
  display_gold_rate_18k_span.innerText = Math.floor(
    (Number(localStorage.getItem('Daily_gold_rate_24k')) * 75) / 100
  );
}

const todays_date = new Date();
console.log(todays_date.getDate());
if (localStorage.getItem('gold_rate_update_date') != todays_date.getDate()) {
  // alert("please update today's gold rate 10gm");
  console.log(
    localStorage.getItem('gold_rate_update_date'),
    todays_date.getDate()
  );
}
gold_rate_24k_button.addEventListener('click', () => {
  const gold_rate_24k_number = Number(gold_rate_24k.value); // input is string convert into number
  localStorage.setItem('Daily_gold_rate_24k', gold_rate_24k_number);

  if (gold_rate_24k.value.length != 5) {
    alert('rate format is not correct');
    console.log(gold_rate_24k.length);
  } else {
    // date update daily in local storage when gold rate is update
    // idea- if date in local storage is not same as current date it mean this is diffrent day so
    // gold rate will update reminder will remind user
    localStorage.setItem('gold_rate_update_date', todays_date.getDate());
    const gold_rate_24k_obj_123 = {
      '24k': gold_rate_24k_number,
      '22k': Math.floor((gold_rate_24k_number * 91.6) / 100),
      '18k': Math.floor((gold_rate_24k_number * 75) / 100),
    };
    // console.log(gold_rate_24k_number)
    display_gold_rate_24k_span.innerText = Number(
      localStorage.getItem('Daily_gold_rate_24k')
    );
    display_gold_rate_22k_span.innerText = Math.floor(
      (Number(localStorage.getItem('Daily_gold_rate_24k')) * 91.6) / 100
    );
    display_gold_rate_18k_span.innerText = Math.floor(
      (Number(localStorage.getItem('Daily_gold_rate_24k')) * 75) / 100
    );
  }
});

//popup part 1 ......................................................................
// data entry window popup part creating

add_item_1.addEventListener('click', () => {
  let window1 = document.createElement('div');

  //id
  window1.id = 'window_popup1';

  body.appendChild(window1);
  // window1.style.width = '200px';
  // window1.style.minheight = '200px';
  window1.style.position = 'fixed';
  // window1.style.backgroundColor = 'red';

  // window1.style.top = '30%';

  // window1.style.left = '40%';

  let close_button = document.createElement('button'); //0
  close_button.innerText = 'X';
  close_button.style.display = 'block';
  window1.appendChild(close_button);

  //input field in window1
  const front_image = document.createElement('input'); //
  front_image.setAttribute('type', 'file');
  front_image.id = 'front_image1';

  const back_image = document.createElement('input');
  back_image.setAttribute('type', 'file');
  back_image.id = 'back_image1';

  const details = document.createElement('input'); //5
  details.id = 'details1';

  // select and option
  const type = document.createElement('select');
  type.setAttribute('id', 'select1');
  console.log(type.value);

  var z = document.createElement('option');
  var t = document.createTextNode('22');
  z.appendChild(t);
  var z1 = document.createElement('option');
  var t1 = document.createTextNode('24');
  z1.appendChild(t1);
  var z2 = document.createElement('option');
  var t2 = document.createTextNode('18');
  z2.appendChild(t2);
  type.appendChild(z);
  type.appendChild(z1);
  type.appendChild(z2);

  const weight = document.createElement('input');
  weight.id = 'weight1';
  weight.setAttribute('type', 'number');

  const making = document.createElement('input');
  making.id = 'making';
  making.setAttribute('type', 'number');
  const add_on = document.createElement('input');
  add_on.id = 'add_on1';
  add_on.setAttribute('type', 'number');

  const front_image_text = document.createElement('p');
  const back_image_text = document.createElement('p');
  const details_text = document.createElement('p');
  const type_text = document.createElement('p');
  const weight_text = document.createElement('p');
  const making_text = document.createElement('p');
  const add_on_text = document.createElement('p');

  front_image_text.innerHTML = '<hr><p>front image</p>';
  back_image_text.innerHTML = '<hr><p>back image</p>';
  details_text.innerHTML = '<hr><p>details:</p>';
  type_text.innerHTML = '<hr><p>type:</p>';
  weight_text.innerHTML = '<hr><p>weight:</p>';
  making_text.innerHTML = '<hr><p>making charge%:</p>';
  add_on_text.innerHTML = '<hr><p>add on</p>';

  window1.appendChild(front_image_text);
  window1.appendChild(front_image);

  window1.appendChild(back_image_text);
  window1.appendChild(back_image);

  window1.appendChild(details_text);
  window1.appendChild(details);
  window1.appendChild(type_text);
  window1.appendChild(type);

  window1.appendChild(weight_text);
  window1.appendChild(weight);

  window1.appendChild(making_text);
  window1.appendChild(making);

  window1.appendChild(add_on_text);
  window1.appendChild(add_on);

  details.setAttribute('placeholder', 'details');
  type.setAttribute('placeholder', 'type');
  weight.setAttribute('placeholder', 'weight');
  making.setAttribute('placeholder', 'making charge');
  add_on.setAttribute('placeholder', 'add on');

  //save and cancel button
  const cancel1 = document.createElement('button');
  const save1 = document.createElement('button');
  cancel1.innerText = 'Cancel';
  save1.innerText = 'Save';
  window1.appendChild(cancel1);
  window1.appendChild(save1);

  // close the popup part
  close_button.addEventListener('click', () => {
    // window1.style.visibility="hidden"
    window1.remove();
  });
  cancel1.addEventListener('click', () => {
    // window1.style.visibility="hidden"

    window1.remove();
  });
  // popup part>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  save1.addEventListener('click', () => {
    // if input fied is empty then alert
    if (
      weight.value == '' &&
      weight.value == '' &&
      weight.value == '' &&
      details.value == '' &&
      front_image.value == '' &&
      back_image.value == ''
    ) {
      alert('font and back image ,details,weight, making, addon is empty');
      return;
    } else {
      if (back_image.value == '') {
        alert('back image is empty');
        return;
      }
      if (details.value == '') {
        alert('details is empty');
        return;
      }
      if (weight.value == '') {
        alert('weight is empty');
        return;
      }
      if (making.value == '') {
        alert('making is empty');
        return;
      }
      if (add_on.value == '') {
        alert('add_on is empty');
        return;
      }
    }

    ///////////////////

    const display = document.getElementById('display');
    // window1.style.visibility="hidden"
    const div_main = document.createElement('div');

    //div main css part class assign
    div_main.className = 'data-field-data_div';

    const div_no = document.createElement('div');
    const div_details = document.createElement('div');
    const div_type = document.createElement('div');
    const div_weight = document.createElement('div');
    const div_price = document.createElement('div');
    const div_making_charge = document.createElement('div');
    const div_add_on = document.createElement('div');
    const div_total = document.createElement('div');

    //append
    display.appendChild(div_main);
    div_main.appendChild(div_no);
    div_main.appendChild(div_details);
    div_main.appendChild(div_type);
    div_main.appendChild(div_weight);
    div_main.appendChild(div_price);
    div_main.appendChild(div_making_charge);
    div_main.appendChild(div_add_on);
    div_main.appendChild(div_total);

    //window1 popup value to div data-field
    // most imartant part*******************************************************************************
    // amount calculation
    //note - daily rate for gold is stored in local storage
    const display_gold_rate_24k_span =
      document.getElementById('gold_rate_24k_span');
    const display_gold_rate_22k_span =
      document.getElementById('gold_rate_22k_span');

    const display_gold_rate_18k_span =
      document.getElementById('gold_rate_18k_span');
    const gold_type = type.value;
    if (gold_type == 24) {
      // div_add_on.innerText = Math.floor( weight.value *Number(display_gold_rate_24k_span.innerText));
      Amount_calculator_based_on_karet(display_gold_rate_24k_span.innerText);
      display_gold_rate_24k_span.style.backgroundColor = 'gold';
      display_gold_rate_24k_span.style.padding = '5px';
      display_gold_rate_24k_span.style.borderRadius = '5px';
      display_gold_rate_24k_span.style.fontWeight = 'bold';
    } else if (gold_type == 22) {
      // div_add_on.innerText = Math.floor( weight.value *Number(display_gold_rate_22k_span.innerText));
      Amount_calculator_based_on_karet(display_gold_rate_22k_span.innerText);
      display_gold_rate_22k_span.style.backgroundColor = 'gold';
      display_gold_rate_22k_span.style.padding = '5px';
      display_gold_rate_22k_span.style.borderRadius = '5px';
      display_gold_rate_22k_span.style.fontWeight = 'bold';
    } else if (gold_type == 20) {
      // div_add_on.innerText = Math.floor( weight.value *Number(display_gold_rate_22k_span.innerText));
      Amount_calculator_based_on_karet(display_gold_rate_22k_span.innerText);
      display_gold_rate_22k_span.style.backgroundColor = 'gold';
    } else if (gold_type == 18) {
      // div_add_on.innerText = Math.floor( weight.value *Number(display_gold_rate_18k_span.innerText));
      Amount_calculator_based_on_karet(display_gold_rate_18k_span.innerText);
      display_gold_rate_18k_span.style.backgroundColor = 'gold';
      display_gold_rate_18k_span.style.padding = '5px';
      display_gold_rate_18k_span.style.borderRadius = '5px';
      display_gold_rate_18k_span.style.fontWeight = 'bold';
    }
    function Amount_calculator_based_on_karet(gold_rate) {
      const gold_rate_in_num = Number(gold_rate);
      const gold_rate_price = gold_rate_in_num;
      const making_charge =
        Math.floor(
          (((making.value * gold_rate_in_num) / 10) * weight.value) / 100
        ) + Number(add_on.value);
      const amount_wt_X_rate = Math.floor(
        (gold_rate_in_num * Number(weight.value)) / 10
      );

      const total_price = making_charge + amount_wt_X_rate;
      //value in to html
      div_price.innerText = Math.floor(gold_rate_price / 10) + '/g';
      div_making_charge.innerText = making_charge;
      div_add_on.innerText = amount_wt_X_rate; //amount mean gold price without making charge
      div_total.innerText = total_price;

      add_item_arr[add_item_arr.length] = total_price;
    }
    //adding item total price into array to calculate all item------------------------
    const add_all_total_amount = document.getElementById('all_total_amount');

    let temp_all_total_amount = 0;
    add_item_arr.forEach((a) => {
      // console.log(a+temp_all_total_amount,"argu")
      temp_all_total_amount = temp_all_total_amount + a;
    });
    add_all_total_amount.innerText = temp_all_total_amount;
    console.log(temp_all_total_amount, 'total');
    console.log(add_all_total_amount);
    //discount section
    const total_discount = document.getElementById('final_discount');
    total_discount.addEventListener('input', () => {
      const discount_in_num = Number(total_discount.value);
      // const add_all_total_amount_in_num=Number(add_all_total_amount.innerText)
      if (discount_in_num > 0) {
        add_all_total_amount.innerText =
          temp_all_total_amount - discount_in_num;
      } else {
        add_all_total_amount.innerText = temp_all_total_amount;
      }
    });

    // ------------------------------------------------------------------------------------------------------
    let data_window_popup1 = document.getElementById('window_popup1');
    console.log(data_window_popup1.childNodes);
    // const total_price = Math.floor(
    //   weight.value * 5000 + (making.value * weight.value * 5000) / 100
    // );

    //all item total amount calculate

    div_no.innerText = add_item_arr.length;

    console.log(add_item_arr);
    div_details.innerText = details.value;
    div_type.innerText = type.value;
    div_weight.innerText = weight.value + 'g';
    // div_type.innerText = type.value;

    // div_making_charge.innerText = Math.floor(
    //   (making.value * weight.value * 5000) / 100
    // );
    // div_add_on.innerText = Math.floor( weight.value * 5000);
    // div_total.innerText = total_price;

    //image part in data field
    // ********************************************************************
    const div_main_image = document.createElement('div');

    const image_div = document.createElement('div');

    const image_div_front = document.createElement('div');
    const image_div_front_img = document.createElement('img');
    image_div_front.appendChild(image_div_front_img);
    image_div_front_img.style.width = '100%';
    image_div_front_img.style.height = '100%';

    const image_div_back = document.createElement('div');
    const image_div_back_img = document.createElement('img');
    image_div_back.appendChild(image_div_back_img);
    image_div_back_img.style.width = '100%';
    image_div_back_img.style.height = '100%';

    image_div.style.width = '100%';
    image_div.style.height = '100%';
    image_div.style.display = 'flex';
    image_div.style.justifyContent = 'space-evenly';
    image_div.style.alignItems = 'center';

    //  image_div.style.backgroundColor="yellow"

    image_div_front.style.width = '45%';
    image_div_front.style.height = '90%';
    // image_div_front.style.backgroundColor="gold"

    image_div_back.style.width = '45%';
    image_div_back.style.height = '90%';
    //  image_div_back.style.backgroundColor="gold"

    div_main_image.style.width = '11.4cm';
    div_main_image.style.height = '5cm';
    // div_main_image.style.backgroundColor="white"

    //  const div_details_text=document.createElement("div");
    //  div_details_text.style.backgroundColor="grey"
    //  div_details_text.innerText="detail of item"

    image_div.appendChild(image_div_front);
    image_div.appendChild(image_div_back);

    div_main_image.appendChild(image_div);
    // div_main_image.appendChild(div_details_text);

    div_details.appendChild(div_main_image);
    /// image showing part>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    //note id for front_image->line- 36 front_image.id="front_image1";
    //note id for back_image--back_image.id="back_image1";

    //previe front variable name-image_div_front_img
    //previe back variable name-image_div_back_img

    //

    function image_display1(input, preview_div) {
      var reader;

      if (input.files && input.files[0]) {
        reader = new FileReader();
        reader.readAsDataURL(input.files[0]);
        reader.onload = function (e) {
          preview_div.setAttribute('src', e.target.result);
          console.log(e.target.result);
        };
      }
    }

    image_display1(front_image, image_div_front_img);
    image_display1(back_image, image_div_back_img);

    // after enter data remove popup window1
    window1.remove();
  });
  // data field creating
});
