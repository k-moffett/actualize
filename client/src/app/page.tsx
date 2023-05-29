import { Metadata} from 'next';
import variables from '../../styles/variables.module.scss';


const metadata: Metadata = {
    title: 'Actualize',
};

export default function Root() {
    return (
        <main>
            <div style={{ color: variables.primaryColor }}>Root Page</div>
        </main>
    );
}
