(function(){
  let data = {
    "benzin": {
      "avtomat": {
        "inspecia-to":                         [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        "maslo-v-dvigatele":                   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        "svechi-zazhigania":                   [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
        "vozdushnyi-filtr":                    [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
        "salonnyi-filtr":                      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        "toplivnyi-filtr-naruzhnyi":           [0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1],
        "toplivnyi-filtr-v-bake":              [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0],
        "antifriz":                            [0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1],
        "zhidkost-gidroprivoda":               [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
        
        "maslo-a-2wd":                         [0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],
        "maslo-a-4wd":                         [0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0],
        "maslo-v-razdatochnoi-korobke":        [0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0],
        "maslo-v-differencialah-obychnyi":     [0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0],
        "maslo-v-differencialah-mehanicheskii":[0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0],
        "grm":                                 [0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0],
        "smazka-sharnirov":                    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
      },
      "mehanika":{
        "inspecia-to":                         [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        "maslo-v-dvigatele":                   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        "svechi-zazhigania":                   [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
        "vozdushnyi-filtr":                    [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
        "salonnyi-filtr":                      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        "toplivnyi-filtr-naruzhnyi":           [0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1],
        "toplivnyi-filtr-v-bake":              [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0],
        "antifriz":                            [0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1],
        "zhidkost-gidroprivoda":               [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
        "maslo-m-2wd":                         [0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0],
        "maslo-m-4wd":                         [0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0],
        
        "maslo-v-razdatochnoi-korobke":        [0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0],
        "maslo-v-differencialah-obychnyi":     [0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0],
        "maslo-v-differencialah-mehanicheskii":[0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0],
        "grm":                                 [0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0],
        "smazka-sharnirov":                    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
      }
    },
    "dizel": {
      "avtomat": {
        "inspecia-to":                         [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        "maslo-v-dvigatele":                   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        
        "vozdushnyi-filtr":                    [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
        "salonnyi-filtr":                      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        
        "toplivnyi-filtr-v-bake":              [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0],
        "antifriz":                            [0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1],
        "zhidkost-gidroprivoda":               [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
        
        "maslo-a-2wd":                         [0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],
        "maslo-a-4wd":                         [0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0],
        "maslo-v-razdatochnoi-korobke":        [0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0],
        "maslo-v-differencialah-obychnyi":     [0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0],
        "maslo-v-differencialah-mehanicheskii":[0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0],
        "grm":                                 [0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0],
        "smazka-sharnirov":                    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
      },
      "mehanika": {
        "inspecia-to":                         [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        "maslo-v-dvigatele":                   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        
        "vozdushnyi-filtr":                    [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
        "salonnyi-filtr":                      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        
        "toplivnyi-filtr-v-bake":              [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0],
        "antifriz":                            [0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1],
        "zhidkost-gidroprivoda":               [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
        
        "maslo-m-4wd":                         [0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0],
        
        "maslo-v-razdatochnoi-korobke":        [0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0],
        "maslo-v-differencialah-obychnyi":     [0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0],
        "maslo-v-differencialah-mehanicheskii":[0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0],
        "grm":                                 [0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0],
        "smazka-sharnirov":                    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
      }
    }
  },
    watch = $('#gas').add('#diesel').add('#avtomat').add('#mehanika').add('#range');

  
  watch.change(pereschet);
  pereschet();

  function pereschet() {
    let checked = watch.filter('input:checked'),
      thisData = data[checked[0].value][checked[1].value],
      fields = $('.to_work tbody tr'),
      probeg = $('.irs-single').text().split(' '),
      index = probeg[0]/15 - 1,
      totalPrice = 0;

    if (index == -1) {
      index = 0;
    }

    for (let i = 1; i < fields.length-1; i++) {
      let name = fields[i].dataset.name;


      if (!thisData[name]) {
        fields[i].hidden = 'true';
      } else if (!thisData[name][index]) {
        fields[i].hidden = 'true';
      }else {
        fields[i].hidden = false;
        let price = Number(fields[i].children[1].innerText);
        totalPrice += price;
        
      }
    }

    $('.t_pr').text(totalPrice);
    $('.t_prise').val(totalPrice);
    $('.servise_book__price span').text(totalPrice);
  };

})();