import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns'


const AppointmentBanner = ({selectDate, setSelectDate}) => {
   // const [selectDate, setSelectDate] = useState(new Date());
    return (
        <header>
             <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="rounded-lg shadow-2xl w-1/2" alt="banner" />
                <div>
              
                           <DayPicker 
                           mode = 'single'
                           selected={selectDate}
                           onSelect={setSelectDate}
                           />
                  <p>You have selected date: {format(selectDate, 'PP')}</p>
                </div>
            </div>
        </div>
        </header>
    );
};

export default AppointmentBanner;