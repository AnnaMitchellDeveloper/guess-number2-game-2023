const input = document.querySelector(".input-field");
const button = document.querySelector(".play-btn");
const answer = Math.floor(Math.random() * 10) + 1;

input.addEventListener("keypress", function(event){
	if (event.keyCode === 13) {
		play();
	}
})

button.addEventListener("click", play);
function play() {
  const userNumber = document.querySelector(".input-field").value;
  if (userNumber < 1 || userNumber > 10) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Pick a number between 1 and 10!",
    });
  } else if (isNaN(userNumber)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Pick a number, please!",
    });
  } else {
    if (userNumber < answer) {
      Swal.fire("Your guess is too low");
    } else if (userNumber > answer) {
      Swal.fire("Your guess is too high");
    } else {
      Swal.fire({
        title: "You WIN!!",
        text: "Congratulations!",
        imageUrl:
          "https://images.unsplash.com/photo-1616337865743-bd29011bc36d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        imageWidth: 600,
        imageHeight: 400,
        imageAlt: "Custom image",
      });
    }
  }
}
