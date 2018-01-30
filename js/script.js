document.addEventListener('DOMContentLoaded', main(), true);

function main() {
  fade();
}

//------------------------------------------------------------------------------
function fade() {
  setTimeout(function () {
    document.body.style.opacity = '1'; // Fade In
  }, 750);
}

//------------------------------------------------------------------------------
