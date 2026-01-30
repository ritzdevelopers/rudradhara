"use client"
import React, { useState } from "react";
import styles from "./page.module.css";
import { MdOutlineArrowOutward } from "react-icons/md";
function S4() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        phone: false,
        message: false,
    });
    const [selectedInterest, setSelectedInterest] = useState<number | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [popup, setPopup] = useState<{ show: boolean; type: 'success' | 'error'; message: string }>({
        show: false,
        type: 'success',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({
                ...prev,
                [name]: false
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {
            name: !formData.name.trim(),
            email: !formData.email.trim(),
            phone: !formData.phone.trim(),
            message: !formData.message.trim(),
        };
        setErrors(newErrors);
        return !Object.values(newErrors).some(error => error);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        // Get selected interest text
        const interestOptions = [
            { text: "Are you looking for the ", bold: "best Rudraksha for you", end: "?" },
            { text: "Do you want to explore ", bold: "daily wear or japa", end: " ?" },
            { text: "Do you prefer a ", bold: "bracelet, mala, or single bead", end: "?" },
            { text: "Any preference for ", bold: "Nepal vs Indonesian", end: "?" },
            { text: "Comfort preference: ", bold: "light / balanced / bold", end: "" }
        ];

        const selectedInterestText = selectedInterest !== null 
            ? `${interestOptions[selectedInterest].text}${interestOptions[selectedInterest].bold}${interestOptions[selectedInterest].end}`
            : "Not selected";

        // Prepare data to send
        const formDataToSubmit = new URLSearchParams();
        formDataToSubmit.append("name", formData.name);
        formDataToSubmit.append("email", formData.email);
        formDataToSubmit.append("phone", formData.phone);
        formDataToSubmit.append("message", formData.message);
        formDataToSubmit.append("interest", selectedInterestText);
        formDataToSubmit.append("date", new Date().toLocaleString());
        formDataToSubmit.append("sheetName", "Sheet1");
        
        // Log what we're sending for debugging
        console.log("Sending data:", {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            interest: selectedInterestText,
            date: new Date().toLocaleString()
        });
        console.log("URLSearchParams string:", formDataToSubmit.toString());
        
        try {
            const res = await fetch(
                "https://script.google.com/macros/s/AKfycbz_e7aOz7XPzpeypKcEwlIZvWUWiJk1M7FbMltfJmpZM6JDvUc0x-u-UOP1zT2ez1Am/exec",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: formDataToSubmit.toString(),
                }
            );

            console.log("Response status:", res.status);
            console.log("Response ok:", res.ok);
            
            // Try to get response text first to see what we're getting
            const responseText = await res.text();
            console.log("Response text:", responseText);
            
            let data;
            try {
                data = JSON.parse(responseText);
            } catch (parseError) {
                console.error("Failed to parse JSON:", parseError);
                console.log("Raw response:", responseText);
                // If it's not JSON, it might still be successful
                if (res.ok) {
                    setPopup({ show: true, type: 'success', message: 'Form submitted successfully!' });
                    setFormData({ name: "", email: "", phone: "", message: "" });
                    setSelectedInterest(null);
                    setIsSubmitting(false);
                    return;
                }
                throw new Error("Invalid response from server");
            }
            
            console.log("Parsed response data:", data);
            console.log("Error object details:", JSON.stringify(data.error, null, 2));
            
            if (data.result === "success") {
                setPopup({ show: true, type: 'success', message: 'Form submitted successfully!' });
                // Reset form
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                });
                setSelectedInterest(null);
            } else if (data.result === "error") {
                // Log full error details
                console.error("Full error object:", data.error);
                console.error("Error keys:", Object.keys(data.error || {}));
                
                // Try to extract error message
                const errorDetails = data.error || {};
                let errorMessage = "Unknown error from Google Script";
                
                if (errorDetails.message) {
                    errorMessage = errorDetails.message;
                } else if (typeof errorDetails === "string") {
                    errorMessage = errorDetails;
                } else if (Object.keys(errorDetails).length > 0) {
                    errorMessage = JSON.stringify(errorDetails);
                }
                
                console.error("Error message:", errorMessage);
                console.error("⚠️ Google Script Error - The error object is empty. This usually means:");
                console.error("1. The Google Script is catching an error but not properly formatting it");
                console.error("2. Check your Google Apps Script code - make sure it's handling errors correctly");
                console.error("3. Verify the Google Sheet exists and has proper permissions");
                
                setPopup({ 
                    show: true, 
                    type: 'error', 
                    message: 'Error submitting form! The Google Script returned an error but didn\'t provide details. Common issues: Google Sheet might not be accessible, column headers might be missing, or script permissions might be incorrect. Please check the browser console (F12) for more details.' 
                });
            } else {
                console.error("Unexpected response format:", data);
                setPopup({ show: true, type: 'error', message: 'Received unexpected response. Check console for details.' });
            }
        } catch (err: any) {
            console.error("Error submitting form:", err);
            console.error("Error stack:", err.stack);
            setPopup({ 
                show: true, 
                type: 'error', 
                message: `There was an error submitting the form: ${err.message || "Unknown error"}. Please check the browser console (F12) for more details.` 
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const closePopup = () => {
        setPopup({ show: false, type: 'success', message: '' });
    };

    return (
        <section className="w-full py-10 sm:py-12 md:py-14 lg:py-[70px] px-4 sm:px-6 md:px-8 lg:px-10 relative flex justify-center items-center">
            {/* Absolute Positioned Elips Image  */}
            <div className="absolute top-[30px] left-0 w-auto h-[204px] z-0 hidden lg:block 2xl:hidden">
                <img src="/contact/elips/elips-1.png" alt="Elips" className="w-full h-full" />
            </div>

            {/* Center Align Container  */}
            <div className={`flex flex-col lg:flex-row lg:justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-[54px] w-full ${styles.mainContainer} `}>

                {/* Left Side Contianer  */}
                <div className="w-full lg:max-w-[273px] z-10 text-center lg:text-left">
                    <h5 className="font-[700] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-montserrat">
                        Send a <br className="hidden lg:block 2xl:hidden"/> Message
                    </h5>
                    <p className="font-[400] text-[16px] sm:text-[18px] lg:text-[20px] mt-2 sm:mt-3 font-montserrat">
                        If you're writing to us about Rudraksha, these details help us guide you faster:
                    </p>
                </div>


                {/* Right Side Container  */}
                <div className="w-full z-10">
                    <form className="w-full flex flex-col gap-4 sm:gap-5 lg:gap-[20px]" onSubmit={handleSubmit}>
                        {/* Top Container  */}
                        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 sm:gap-8 lg:gap-[40px]">

                            {/* Left Side Form Input Fields Container  */}
                            <div className="w-full lg:max-w-[462px] flex flex-col gap-3 sm:gap-4 lg:gap-[10px]">
                                <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[10px]">
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Your Name *" 
                                        className="w-full h-[44px] font-open-sans sm:h-[48px] lg:h-[50px] px-4 border-[1px] outline-none focus:border-[#6C3E1A] border-[#E4E1E1] rounded-[2px] font-[400] text-[14px] sm:text-[15px] lg:text-[16px] placeholder:text-[#000000] focus:outline-none placeholder:text-[#4E4E4E]" 
                                        required 
                                    />

                                    {/* Error Message  */}
                                    {
                                        errors.name && (
                                            <p className="font-[400] text-[12px] sm:text-[13px] lg:text-[14px] text-[#F01414] font-open-sans">
                                                Please fill out  this field.
                                            </p>
                                        )
                                    }
                                </div>

                                <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[10px]">
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Your e-mail" 
                                        className="w-full h-[44px] font-open-sans sm:h-[48px] lg:h-[50px] px-4 border-[1px] outline-none focus:border-[#6C3E1A] border-[#E4E1E1] rounded-[2px] font-[400] text-[14px] sm:text-[15px] lg:text-[16px] placeholder:text-[#000000] focus:outline-none placeholder:text-[#4E4E4E]" 
                                        required 
                                    />

                                    {/* Error Message  */}
                                    {
                                        errors.email && (
                                            <p className="font-[400] text-[12px] sm:text-[13px] lg:text-[14px] text-[#F01414] font-open-sans">
                                                Please fill out  this field.
                                            </p>
                                        )
                                    }
                                </div>

                                <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[10px]">
                                    <input 
                                        type="number" 
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Phone *" 
                                        className="w-full h-[44px] font-open-sans sm:h-[48px] lg:h-[50px] px-4 border-[1px] outline-none focus:border-[#6C3E1A] border-[#E4E1E1] rounded-[2px] font-[400] text-[14px] sm:text-[15px] lg:text-[16px] placeholder:text-[#000000] focus:outline-none placeholder:text-[#4E4E4E]" 
                                        required
                                    />

                                    {/* Error Message  */}
                                    {
                                        errors.phone && (
                                            <p className="font-[400] text-[12px] sm:text-[13px] lg:text-[14px] text-[#F01414] font-open-sans">
                                                Please fill out  this field.
                                            </p>
                                        )
                                    }
                                </div>

                                <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[10px]">
                                    <textarea 
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Message *" 
                                        className="w-full h-[100px] font-open-sans sm:h-[110px] lg:h-[117px] px-4 py-3 border-[1px] outline-none focus:border-[#6C3E1A] border-[#E4E1E1] rounded-[2px] font-[400] text-[14px] sm:text-[15px] lg:text-[16px] placeholder:text-[#000000] focus:outline-none placeholder:text-[#4E4E4E] resize-none" 
                                        required 
                                    />

                                    {/* Error Message  */}
                                    {
                                        errors.message && (
                                            <p className="font-[400] text-[12px] sm:text-[13px] lg:text-[14px] text-[#F01414] font-open-sans">
                                                Please fill out  this field.
                                            </p>
                                        )
                                    }
                                </div>
                            </div>

                            {/* Right Side Radio Buttons Container  */}
                            <div className="w-full lg:max-w-[446px] flex flex-col gap-4 sm:gap-5 lg:gap-[20px]">
                                <p className="font-[600] text-[18px] sm:text-[19px] lg:text-[20px] text-center lg:text-left font-montserrat">I'm interested in...</p>
                                <ul className="flex flex-col gap-3 sm:gap-4 lg:gap-[10px]">
                                    {
                                        [
                                            { text: "Are you looking for the ", bold: "best Rudraksha for you", end: "?" },
                                            { text: "Do you want to explore ", bold: "daily wear or japa", end: " ?" },
                                            { text: "Do you prefer a ", bold: "bracelet, mala, or single bead", end: "?" },
                                            { text: "Any preference for ", bold: "Nepal vs Indonesian", end: "?" },
                                            { text: "Comfort preference: ", bold: "light / balanced / bold", end: "" }
                                        ].
                                            map((item, index: number) => (
                                                <li key={index} className="w-full">
                                                    <div
                                                        className={`w-full flex items-center gap-2 sm:gap-3 lg:gap-[10px] rounded-full px-3 sm:px-4 p-2 sm:p-3 lg:p-[10px] transition-colors ${selectedInterest === index ? 'bg-[#C87A2A]' : 'bg-[#FFFAF2]'
                                                            }`}
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="interest"
                                                            id={`interest-${index}`}
                                                            checked={selectedInterest === index}
                                                            onChange={() => setSelectedInterest(index)}
                                                            className={`
                                                        appearance-none 
                                                        w-[18px] h-[18px] sm:w-[19px] sm:h-[19px] lg:w-[20px] lg:h-[20px]
                                                        border-[1px] border-[#EABB8C] 
                                                        rounded-full 
                                                        outline-none 
                                                        cursor-pointer
                                                        transition-all
                                                        checked:border-[5px] sm:checked:border-[5px] lg:checked:border-[6px] checked:border-white
                                                        shrink-0
                                                    `}
                                                        />
                                                        <label htmlFor={`interest-${index}`} className={` text-[13px] xl:text-[16px] font-[400] font-open-sans ${selectedInterest === index ? 'text-[#FFFFFF]' : 'text-[#000000]'} cursor-pointer`}>
                                                            {item.text}
                                                            <span className="font-[700] font-open-sans">{item.bold}</span>
                                                            {item.end}
                                                        </label>
                                                    </div>
                                                </li>
                                            ))
                                    }
                                </ul>
                            </div>
                        </div>

                        {/* Bottom Submit Button Container  */}
                        <div className="w-full flex justify-center items-center">
                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full h-[44px] font-open-sans sm:h-[48px] lg:h-[50px] flex justify-center items-center gap-2 rounded-[4px] font-[700] text-[14px] sm:text-[15px] lg:text-[16px] text-white cursor-pointer bg-[#6C3E1A] btn-slide2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-[700] text-white font-open-sans">
                                    {isSubmitting ? "Submitting..." : "Send a Message"}
                                </p>
                                {!isSubmitting && <MdOutlineArrowOutward className='w-[24px] h-[24px]  text-white' />}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Custom Popup Modal */}
            {popup.show && (
                <div 
                    className={`${styles.popupOverlay} fixed inset-0 z-[9999] flex items-center justify-center `}
                    onClick={closePopup}
                >
                    <div 
                        className={`${styles.popupContent} relative w-[90%] max-w-[500px] rounded-[8px] p-6 sm:p-8 shadow-2xl bg-white`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closePopup}
                            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                            aria-label="Close popup"
                        >
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Icon */}
                        <div className="flex justify-center mb-4">
                            {popup.type === 'success' ? (
                                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            ) : (
                                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                                    <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                            )}
                        </div>

                        {/* Title */}
                        <h3 className={`text-center font-[700] text-[20px] sm:text-[22px] lg:text-[24px] mb-3 font-montserrat ${
                            popup.type === 'success' ? 'text-green-600' : 'text-red-600'
                        }`}>
                            {popup.type === 'success' ? 'Success!' : 'Error'}
                        </h3>

                        {/* Message */}
                        <p className="text-center font-[400] text-[14px] sm:text-[15px] lg:text-[16px] text-gray-700 font-open-sans mb-6 leading-relaxed whitespace-pre-line">
                            {popup.message}
                        </p>

                        {/* Action Button */}
                        <div className="flex justify-center">
                            <button
                                onClick={closePopup}
                                className={`px-6 py-3 rounded-[4px] font-[700] cursor-pointer text-[14px] sm:text-[15px] lg:text-[16px] font-open-sans transition-colors ${
                                    popup.type === 'success' 
                                        ? 'bg-[#6C3E1A] text-white hover:bg-[#5a3315]' 
                                        : 'bg-red-600 text-white hover:bg-red-700'
                                }`}
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default S4;