var fadeOut = function(node, duration) {
  node.style.opacity = 1;

  var start = performance.now();

  requestAnimationFrame(function tick(timestamp) {
    var easing = (timestamp - start) / duration;
    node.style.opacity = Math.max(1 - easing, 0);

    if (easing < 1) {
      requestAnimationFrame(tick);
    } else {
      node.style.opacity = '';
      node.classList.add('hide');
    }
  });
}

var fadeIn = function (node, duration) {
  if (getComputedStyle(node).display !== 'none') return;

  if (node.classList.contains('hide')) {
    node.classList.remove('hide');
  }
  node.style.opacity = 0;

  var start = performance.now();

  requestAnimationFrame(function tick(timestamp) {
    var easing = (timestamp - start) / duration;
    node.style.opacity = Math.min(easing, 1);

    if (easing < 1) {
      requestAnimationFrame(tick);
    } else {
      node.style.opacity = '';
    }
  });
}
