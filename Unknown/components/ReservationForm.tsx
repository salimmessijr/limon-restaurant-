import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ReservationForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        time: '',
        diners: 1
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <motion.div
            className="reservation-form"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {submitted ? (
                <motion.div
                    className="confirmation"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <h2>Reservation Confirmed!</h2>
                    <p>
                        Thank you, {formData.name}. Your reservation for {formData.diners} diner(s) on {formData.date} at {formData.time} is confirmed.
                    </p>
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                        />
                    </label>
                    <label>
                        Date:
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Time:
                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Number of Diners:
                        <input
                            type="number"
                            name="diners"
                            value={formData.diners}
                            onChange={handleChange}
                            min="1"
                            required
                        />
                    </label>
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="submit-button"
                    >
                        Submit
                    </motion.button>
                </form>
            )}
        </motion.div>
    );
};

export default ReservationForm;
