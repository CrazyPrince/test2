<style>
  #ttre {
    background-image: url("chemin_de_l_image.jpg");
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    color: transparent;
  }
</style>


button {
  padding: 15px 30px;
  font-size: 18px;
  outline: none;
  border: none;
  border-radius: 10px;
  transition: 0.5s;
  background: #1e1e1e;
  cursor: pointer;
  color: greenyellow;
  box-shadow: 0 0 10px #363636, inset 0 0 10px #363636;
}

button:hover {
  animation: a 0.5s 1 linear;
}

@keyframes a {
  0% {
    transform: scale(0.7, 1.3);
  }

  25% {
    transform: scale(1.3, 0.7);
  }

  50% {
    transform: scale(0.7, 1.3);
  }

  75% {
    transform: scale(1.3, 0.7);
  }

  100% {
    transform: scale(1, 1);
  }
}
