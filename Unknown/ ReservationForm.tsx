import React from 'react';

const ReservationForm: React.FC = () => {
    return (
        <div>
            <h2>Reservation Form</h2>
            <form>
                <label>
                    Name:
                    <input type="text" placeholder="Enter your name" />
                </label>
                <br />
                <label>
                    Date:
                    <input type="date" />
                </label>
                <br />
                <label>
                    Time:
                    <input type="time" />
                </label>
                <br />
                <label>
                    Number of Diners:
                    <input type="number" placeholder="Enter number of diners" />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ReservationForm;
