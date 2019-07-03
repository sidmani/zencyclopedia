var filtered = {};

function updateVisibility() {
  var objs = document.getElementsByClassName('element');
  var keys = Object.keys(filtered);

  var tagElems = document.getElementsByClassName('tag');
  for (var i = 0; i < tagElems.length; i++) {
    if (filtered[tagElems[i].classList[1]]) {
      tagElems[i].classList.add('select');
    } else {
      tagElems[i].classList.remove('select');
    }
  }

  for (var i = 0; i < objs.length; i++) {
    var shouldShow = true;
    keys.forEach(function(tag) {
      shouldShow = shouldShow && objs[i].classList.contains(tag);
    });

    objs[i].style.display = shouldShow ? 'block' : 'none';
  }

  var cats = document.getElementsByClassName('category');
  for (var i = 0; i < cats.length; i++) {
    var visible = cats[i].getElementsByClassName(keys.join(' ')).length !== 0 || keys.length === 0;
    cats[i].style.display = visible ? 'block' : 'none';
  }
}

function filter(tag) {
  if (filtered[tag]) {
    delete filtered[tag];
  } else {
    filtered[tag] = true;
  }
  updateVisibility();
}
