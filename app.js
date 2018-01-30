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

            let q=String(data.quote);
            let auth=String(data.author);
            
            let quot=document.querySelector('#quote').innerHTML=q;
            let author=document.querySelector('#author').innerHTML="-"+auth;
            
        })

        .catch(function(err){
            console.log('Something went wrong!',err);
        })

}
