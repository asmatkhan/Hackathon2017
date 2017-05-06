<script>
function wordFrequency(txt){
  var wordArray = txt.split(/[ .?!,*'"]/);
  var newArray = [], wordObj;
  wordArray.forEach(function (word) {
    wordObj = newArray.filter(function (w){
      return w.text == word;
    });
    if (wordObj.length) {
      wordObj[0].size += 1;
    } else {
      newArray.push({text: word, size: 1});
    }
  });
  return newArray;
}

document.write(JSON.stringify(wordFrequency("count everything, count all the words, count all the words!").sort(function(a,b){return a.size<b.size})).split("},").join("}<br/>"));
</script>