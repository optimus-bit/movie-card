import React from 'react';

import "./CardUI.css"
import img1 from'../asset/black-widow.png';
import img2 from'../asset/harley-quinn.png';
import img3 from'../asset/mulan.png';
import img4 from'../asset/no-time-to-die.png';
import img5 from'../asset/top-gun-maverick.png';
import img6 from'../asset/wonder-woman-1984.png';

const Card=props=>{
    return (
<>
<div className="card text-center">
    <div className="overflow">
        <img src={img1}alt="image 1" className="card-img-fluid"/>
        </div>
        <div className="card-body text-blue">
        <h4 className="card-title"> BLACK WIDOW</h4>
        <p className="card-text-secondary">Black Widow is an upcoming American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is intended to be the 24th film in the Marvel Cinematic Universe (MCU). The film was directed by Cate Shortland and written by Eric Pearson from a story by Jac Schaeffer and Ned Benson, and stars Scarlett Johansson as Natasha Romanoff / Black Widow alongside Florence Pugh, David Harbour, O-T Fagbenle, William Hurt, Ray Winstone, and Rachel Weisz. Set after Captain America: Civil War (2016), the film sees Romanoff on the run and forced to confront her past. </p>
        <a href="#" className="btn btn-outline-success">PRE-ORDER</a>
        

    </div>
</div>

<div className="card text-center">
    <div className="overflow">
        <img src={img2}alt="image 2" className="card-img-fluid"/>
        </div>
        <div className="card-body text-blue">
        <h4 className="card-title"> HARLEY-QUINN: BIRDS OF PREY</h4>
        <p className="card-text-secondary">Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn) is a 2020 American superhero film based on the DC Comics team Birds of Prey. ... The film follows Harley Quinn as she joins forces with Helena Bertinelli, Dinah Lance, and Renee Montoya to save Cassandra Cain from Gotham City crime lord Black Mask </p>
        <a href="#" className="btn btn-outline-success">PRE-ORDER</a>
    </div>
</div>

<div className="card text-center">
    <div className="overflow">
        <img src={img3}alt="image 3" className="card-img-fluid"/>
        </div>
        <div className="card-body text-blue">
        <h4 className="card-title"> MULAN </h4>
        <p className="card-text-secondary">Mulan is a girl, the only child of her honored family. When the Huns invade China, one man from every family is called to arms. Mulan's father, who has an old wound and cannot walk properly, decides to fight for his country and the honor of his family though it is clear that he will not survive an enemy encounter. Mulan, who just got rejected by the matchmaker because she had set her on fire, decides to prove that she is worth something and steals away to fit her father's place in the Chinese army. She prays to her family's ancestors for protection and luck before leaving as a man in her father's armor with her family's horse. The ancestors awake and decide to send Mushu, a little dishonored dragon to aid Mulan in her quest. Weeks later, Mulan and the other troopers have survived the training camp and are on the way north to stop the Huns. After being spotted and pursued by the enemies, an impass situation in the mountains forces Mulan to come up with an idea. But then, her real gender will no longer be a secret. She decides to risk everything in order to save China </p>
        <a href="#" className="btn btn-outline-success">PRE-ORDER</a>
    </div>
</div>

<div className="card text-center">
    <div className="overflow">
        <img src={img4}alt="image 4" className="card-img-fluid"/>
        </div>
        <div className="card-body text-blue">
        <h4 className="card-title"> NO TIME TO DIE </h4>
        <p className="card-text-secondary">Five years after the capture of Ernst Stavro Blofeld,[8][a] James Bond has left active service. He is approached by Felix Leiter, his friend and a CIA officer, who enlists his help in the search for Valdo Obruchev, a missing scientist. When it becomes apparent that Obruchev was abducted, Bond must confront a danger the likes of which the world has never seen before</p>
        <a href="#" className="btn btn-outline-success">PRE-ORDER</a>
    </div>
</div>

<div className="card text-center">
    <div className="overflow">
        <img src={img5}alt="image 5" className="card-img-fluid"/>
        </div>
        <div className="card-body text-blue">
        <h4 className="card-title"> TOP GUN MAVERICK </h4>
        <p className="card-text-secondary">After more than thirty years of service as one of the Navy’s top aviators, Pete “Maverick” Mitchell (Tom Cruise) is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him. When he finds himself training a detachment of Top Gun graduates for a specialized mission the likes of which no living pilot has ever seen, Maverick encounters Lt. Bradley Bradshaw (Miles Teller), call sign: “Rooster,” the son of Maverick’s late best friend and Radar Intercept Officer Lt. Nick Bradshaw, known as "Goose.” Facing an uncertain future and confronting the ghosts of his past, Maverick is drawn into a confrontation with his own deepest fears, culminating in a mission that demands the ultimate sacrifice from those who will be chosen to fly it. </p>
        <a href="#" className="btn btn-outline-success">PRE-ORDER</a>
    </div>
</div>

<div className="card text-center">
    <div className="overflow">
        <img src={img6}alt="image 6" className="card-img-fluid"/>
        </div>
        <div className="card-body text-blue">
        <h4 className="card-title"> WONDER WOMAN(1984) </h4>
        <p className="card-text-secondary">Wonder Woman 1984 (also marketed as WW84: Wonder Woman 1984) is an upcoming American superhero film based on the DC Comics character Wonder Woman. It is the sequel to 2017's Wonder Woman and the ninth installment in the DC Extended Universe (DCEU). The film is directed by Patty Jenkins from a script she wrote with Geoff Johns and David Callaham, and a story by Johns and Jenkins, and stars Gal Gadot as Diana Prince / Wonder Woman, alongside Chris Pine, Kristen Wiig, Pedro Pascal, Robin Wright, and Connie Nielsen in supporting roles. Set in 1984, the film follows Diana as she faces off against Maxwell Lord and Cheetah. </p>
        <a href="#" className="btn btn-outline-success">PRE-ORDER</a>
    </div>
</div>

</>
    );
}


export default Card;