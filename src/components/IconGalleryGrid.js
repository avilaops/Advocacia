'use client';

import { useCallback } from "react";
import {
    Hammer,
    Group,
    DollarCircle,
    Bank,
    LockSquare,
    HomeSimple,
    Car,
    ChatLines,
    ArrowRight,
    MapPin,
    Clock,
    Phone,
    Calendar,
    Mail,
    User,
    BadgeCheck,
    CheckCircle,
    InfoCircle,
    Menu,
    Search,
    Settings,
    Bell,
    Heart,
    Star,
    ShareIos,
    Download,
    Upload,
    Edit,
    Trash,
    Plus,
    Minus,
    Eye,
    Lock,
    LockSlash,
    RefreshDouble,
    WarningTriangle,
    Check,
} from "iconoir-react";

const iconComponents = {
    Hammer,
    Group,
    DollarCircle,
    Bank,
    LockSquare,
    HomeSimple,
    Car,
    ChatLines,
    ArrowRight,
    MapPin,
    Clock,
    Phone,
    Calendar,
    Mail,
    User,
    BadgeCheck,
    CheckCircle,
    InfoCircle,
    Menu,
    Search,
    Settings,
    Bell,
    Heart,
    Star,
    ShareIos,
    Download,
    Upload,
    Edit,
    Trash,
    Plus,
    Minus,
    Eye,
    Lock,
    LockSlash,
    RefreshDouble,
    WarningTriangle,
    Check,
};

function copyImportStatement(name) {
    return `import { ${name} } from "iconoir-react";`;
}

export default function IconGalleryGrid({ icons }) {
    const handleIconClick = useCallback(async (name) => {
        const importStatement = copyImportStatement(name);
        try {
            if (navigator?.clipboard?.writeText) {
                await navigator.clipboard.writeText(importStatement);
                window.alert(`Copiado: ${importStatement}`);
            } else {
                throw new Error('Clipboard API not available');
            }
        } catch (error) {
            console.warn('Falha ao copiar para a área de transferência', error);
            window.alert(importStatement);
        }
    }, []);

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {icons.map(({ name }) => {
                const IconComponent = iconComponents[name];

                return (
                    <button
                        type="button"
                        key={name}
                        className="group border border-green-200 rounded-lg p-4 bg-white hover:bg-green-50 hover:border-green-400 transition flex flex-col items-center gap-3 cursor-pointer"
                        onClick={() => handleIconClick(name)}
                    >
                        <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition">
                            {IconComponent ? (
                                <IconComponent width={32} height={32} strokeWidth={1.5} className="text-green-darker" />
                            ) : (
                                <span className="text-xs text-green-darker">{name}</span>
                            )}
                        </div>
                        <span className="text-xs text-center text-green-700 font-mono">
                            {name}
                        </span>
                    </button>
                );
            })}
        </div>
    );
}
