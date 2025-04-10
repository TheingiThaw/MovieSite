import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router";
import AuthenticatedLayout from './Layouts/AuthenticatedLayout';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
        let page = pages[`./Pages/${name}.jsx`]
        const isAuthPage = name.startsWith('Auth/')

        page.default.layout = page.default.layout || (
            isAuthPage ? undefined : (page => <AuthenticatedLayout children={page} />)
        )

        return page
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <BrowserRouter>
                <App {...props} />
            </BrowserRouter>);
    },
    progress: {
        color: '#4B5563',
    },
});
