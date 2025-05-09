function Logo() {
    return (
        <svg width="40" height="40" viewBox="0 0 36 36">
            <defs>
                <linearGradient
                    id="custom_gradient"
                    x1="50%"
                    x2="50%"
                    y1="97.078%"
                    y2="0%"
                >
                    <stop offset="0%" stopColor="#6a11cb"></stop>
                    <stop offset="100%" stopColor="#2575fc"></stop>
                </linearGradient>
            </defs>
            <circle cx="18" cy="18" r="18" fill="url(#custom_gradient)"></circle>
            <text x="18" y="24" fontFamily="Arial" fontSize="20" fontWeight="bold" fill="#fff" textAnchor="middle">SC</text>
        </svg>
    );
}

export default Logo;
