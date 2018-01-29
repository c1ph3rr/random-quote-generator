const button=document.querySelector('#click');
const newQuote=document.querySelector('.new-quote');
const url='http://quotes.stormconsultancy.co.uk/random.json';


button.addEventListener('click',getNewQuote);

function getNewQuote(){
    fetch(url)
        .then(function(res){
          return res.json();
        })
        .then(function(data){
            console.log(data);

            const p=document.createElement('p');
            
            p.appendChild(document.createTextNode(JSON.stringify(data.quote)));

            newQuote.appendChild(p);

            newQuote.removeChild(p);
        
            

        })


        .catch(function(err){
            console.log('Something went wrong!',err);
        })

}