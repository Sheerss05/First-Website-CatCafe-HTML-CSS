window.onload = init;

function init() {

    var Today = new Date();
    document.getElementById('date').value= Today.getDate()+"/"+ (Today.getMonth()+1) + "/" +Today.getFullYear();

    document.getElementById('customerName').focus();
    document.forms[0].onsubmit = function()
    {
        if (this.checkValidity())
        {
            if(document.getElementById('totalAmount').value>0 ) 
            {
                        if (confirm("Are sure that you would like to submit the book order?") == 1)
                {
                            var name= document.getElementById('customerName').value;
                            alert( name + " , your order will be place after the payment. ")
                               
                                 return true;
                }
                else
                {
                    return false;    
                }
            }
            else
            {
              alert("Total Amount is invalid");   
              return false; 
            }
        }
    }
}