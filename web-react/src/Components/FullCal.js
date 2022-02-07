import styled from 'styled-components';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const StCal = styled.div`
    padding: 1rem;
    margin-top: 1rem; margin-bottom: 2rem;
    background-color: #FAFAFA;
    border-radius: 3px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transition: all 0.7s;
    font-size: 1.5rem;
    width: 1000px;

    @keyframes smoothAppear {
        from {
          opacity: 0;
          transform: translateY(-5%);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    
    animation: smoothAppear 0.7s;
`;

const FullCal = () => {
    return (
        <StCal>
            <div>
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                />
            </div>
        </StCal>
    )
}
export default FullCal;