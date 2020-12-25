import PaintingList from './components/PaintingList';
import Section from './components/Section';
// import Painting from './components/Painting';
import paintings from './paintings.json';


export default function App() {
    // const isOnline = true;

    return (
        <div>
            <Section title="Топ недели">
                <PaintingList items={paintings} />
            </Section>
            <Section title="Лучшее">
                <PaintingList items={paintings} />
            </Section>
            
        </div>
    );    
}