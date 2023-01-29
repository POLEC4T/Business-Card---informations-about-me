import selfPicture from '../images/myself.jpg';
import envelop from '../images/envelop.svg';
import linkedin from '../images/linkedInLogo.svg';

export default function Info(){
    return (
        <header>
            <img src= {selfPicture} />
            <div className='name-student-container'>
                <h1>Milo Niemaz</h1>
                <p>
                    <span>Sophomore informatic student</span> 
                    <span>IUT2 Grenoble</span>
                </p>
            </div>
            <div className='btn-container'>
                <a href="mailto:Milo.Niemaz@etu.univ-grenoble-alpes.fr">
                    <img src= {envelop}></img>
                    <p>Email</p>
                </a>
                <a href='https://www.linkedin.com/in/milo-niemaz-06b925155/'>
                    <img src={linkedin}></img>
                    <p>LinkedIn</p>
                </a>
            </div>
        </header>
    );
}