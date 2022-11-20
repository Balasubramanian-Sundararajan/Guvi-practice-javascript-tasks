const div = document.createElement("div");
div.setAttribute("id", "callbackhell");
const header = document.createElement("h2");
header.innerText= "Display countdown from 10 to 1 on the screen and then display Happy Independence Day on the screen.";
div.appendChild(header)
const hell = document.createElement("h3");
hell.setAttribute("id", "hell-text");
hell.innerText= "Count Start";
div.appendChild(hell);
document.body.append(div);

//Callback Hell
setTimeout( () =>{
    hell.innerText = "10";
    setTimeout( () =>{
        hell.innerText = "9";
        setTimeout( () =>{

            hell.innerText = "8";
            setTimeout( () =>{

                hell.innerText = "7";
                setTimeout( () =>{

                    hell.innerText = "6";
                    setTimeout( () =>{

                        hell.innerText = "5";
                        setTimeout( () =>{

                            hell.innerText = "4";
                            setTimeout( () =>{

                                hell.innerText = "3";
                                setTimeout( () =>{

                                    hell.innerText = "2";
                                    setTimeout( () =>{

                                        hell.innerText = "1";
                                        setTimeout( () =>{

                                            hell.innerText = "Happy Independence Day!";

                                        }, 1000);


                                    }, 1000);


                                }, 1000);


                            }, 1000);

                        }, 1000);

                    }, 1000);

                }, 1000);

            }, 1000);

        }, 1000);
    }, 1000);
}, 1000);
