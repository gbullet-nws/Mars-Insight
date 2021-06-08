// clef API ⬇
let API_Key ="CsoVUPNQxNW8r9gahaIsfMAn6B3pYbpA8e46YI6c";

fetch(API_Key)
.then((resp) => resp.json())
.then(function(data) 
{
  let result = data.results;
  return result ;
})
.catch(function(error) 
{
  console.log(error);
});
