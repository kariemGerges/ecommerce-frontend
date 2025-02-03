const Card = ({ children, className = '' }) => (
    <div className={`bg-white rounded-lg border shadow-sm ${className}`}>
        {children}
    </div>
);

const CardHeader = ({ children, className = '' }) => (
    <div className={`p-6 border-b ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = '' }) => (
    <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>
);

const CardContent = ({ children, className = '' }) => (
    <div className={`p-6 ${className}`}>{children}</div>
);

export { Card, CardHeader, CardTitle, CardContent };