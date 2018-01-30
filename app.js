const button=document.querySelector('#click');
const quote=document.querySelector('#quote');
const url='http://quotes.stormconsultancy.co.uk/random.json';


button.addEventListener('click',getNewQuote);

function getNewQuote(){
    fetch(url)
        .then(function(res){
          return res.json();
        })
        .then(function(data){
            console.log(data);
            
            let d=data
            d.quote( document.createTextNode(quote.value));   

            
            
        })

        .catch(function(err){
            console.log('Something went wrong!',err);
        })

}