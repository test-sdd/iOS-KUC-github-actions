(function(){
  "use strict"
  
  const buttonEl_Nor = new Kuc.MobileButton({
      text: 'Normal',
      type: 'normal',
      className: 'options-class',
      id: 'options-id',
      visible: true,
      disabled: false,
  });
  buttonEl_Nor.addEventListener("click", event => {
    console.log(event);
  });
  
  const buttonEl_Sub = new Kuc.MobileButton({
      text: 'submit',
      type: 'submit',
      className: 'options-class',
      id: 'options-id',
      visible: true,
      disabled: false,
  });
  buttonEl_Sub.addEventListener("click", event => {
    console.log(event);
  });
  
  const textEl = new Kuc.MobileText({
      label: 'Fruit',
      requiredIcon: true,
      value: 'Apple',
      placeholder: 'Apple',
      prefix: '$',
      suffix: 'yen',
      textAlign: 'left',
      error: 'Error occurred!',
      className: 'options-class',
      id: 'options-id',
      visible: true,
      disabled: false
    });
    textEl.addEventListener("change", event => {
      console.log(event);
    });
    textEl.addEventListener("focus", event => {
      console.log(event);
    });
  
    const checkboxEl = new Kuc.MobileCheckbox({
      label: 'Fruit',
      requiredIcon: true,
      items: [
        { 
          label: 'orange',
          value: 'Orange' 
        },
        { 
          label: 'apple',
          value: 'Apple' 
        }
      ],
      value: ['Orange'],
      error: 'Error occurred!',
      className: 'options-class',
      id: 'options-id',
      visible: true,
      disabled: false,
      borderVisible: true,
    });
    checkboxEl.addEventListener("change", event => {
      console.log(event);
    });

  const textareaEl = new Kuc.MobileTextArea({
      label: 'Fruit',
      requiredIcon: true,
      value: 'Apple',
      error: 'Error occurred!',
      className: 'options-class',
      id: 'options-id',
      visible: true,
      disabled: false
    });
    checkboxEl.addEventListener("change", event => {
      console.log(event);
    });
    checkboxEl.addEventListener("focus", event => {
      console.log(event);
    });

    const radioButtonEl = new Kuc.MobileRadioButton({
      label: "Fruit",
      requiredIcon: true,
      items: [
        {
          label: "orange",
          value: "Orange"
        },
        {
          label: "apple",
          value: "Apple"
        }
      ],
      value: "Orange",
      error: "Error occurred!",
      className: "options-class",
      id: "options-id",
      visible: true,
      disabled: false,
      borderVisible: true
    });
    radioButtonEl.addEventListener("change", event => {
      console.log(event);
    });
  
  kintone.events.on( "mobile.app.record.index.show", () => {
    kintone.mobile.app.getHeaderSpaceElement().appendChild(buttonEl_Nor);
    kintone.mobile.app.getHeaderSpaceElement().appendChild(buttonEl_Sub);
    kintone.mobile.app.getHeaderSpaceElement().appendChild(textEl);
    kintone.mobile.app.getHeaderSpaceElement().appendChild(checkboxEl);
    kintone.mobile.app.getHeaderSpaceElement().appendChild(textareaEl);
    kintone.mobile.app.getHeaderSpaceElement().appendChild(radioButtonEl);
    return event;
  });
  
  kintone.events.on( "mobile.app.record.detail.show", () => {
    kintone.mobile.app.getHeaderSpaceElement().appendChild(buttonEl_Nor);
    kintone.mobile.app.getHeaderSpaceElement().appendChild(buttonEl_Sub);
    kintone.mobile.app.getHeaderSpaceElement().appendChild(textEl);
    kintone.mobile.app.getHeaderSpaceElement().appendChild(checkboxEl);
    kintone.mobile.app.getHeaderSpaceElement().appendChild(textareaEl);
    kintone.mobile.app.getHeaderSpaceElement().appendChild(radioButtonEl);
    return event;
  });

  kintone.events.on( ["mobile.app.record.create.show", "app.record.edit.show"], () => {
    kintone.app.record.getSpaceElement('compRenderArea').appendChild(buttonEl_Nor);
    kintone.app.record.getSpaceElement('compRenderArea').appendChild(buttonEl_Sub);
    kintone.app.record.getSpaceElement('compRenderArea').appendChild(textEl);
    kintone.app.record.getSpaceElement('compRenderArea').appendChild(checkboxEl);
    kintone.app.record.getSpaceElement('compRenderArea').appendChild(textareaEl);
    kintone.app.record.getSpaceElement('compRenderArea').appendChild(radioButtonEl);
    return event;
  });

})();