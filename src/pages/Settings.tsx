
import React from 'react';
import { Layout } from '../components/Layout';

export const Settings: React.FC = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600">Manage your application settings</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Settings Page</h2>
          <p className="text-gray-600">
            This page is intentionally left empty as requested. You can add your settings configuration here.
          </p>
        </div>
      </div>
    </Layout>
  );
};
