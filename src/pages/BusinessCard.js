import Info from '../composants/Info';
import MainContent from '../composants/MainContent';
import Footer from '../composants/Footer';

export default function BusinessCard(){
    return (
        <div className='card-container'>
            <Info />
            <MainContent />
            <Footer />
        </div>
    )
}