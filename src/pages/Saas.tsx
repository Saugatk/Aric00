import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Saas = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto">
        <Link to="/services" className="inline-flex items-center mb-6 text-primary hover:text-primary-dark transition-colors">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Services
        </Link>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">SaaS Services Pricing – AriciaLabs</h1>
            <p className="text-gray-700">We provide cloud-based SaaS solutions designed to streamline operations, improve scalability, and drive business growth. Choose the package that best fits your business needs.</p>
          </div>

          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🚀 CRM Solutions (Customer Relationship Management)</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Basic (Essential Features)
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Standard (Best Value)
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Premium (Advanced Features)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Small Business CRM
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Lead management, contact storage, basic reports)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Automation, integrations, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Advanced reporting, AI insights, 3-month support)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Enterprise CRM
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Multi-user access, analytics, reporting)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु(Custom workflows, integrations, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु(Custom CRM design, AI-powered insights)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🛒 E-Commerce Solutions</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Basic (Essential Features)
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Standard (Best Value)
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Premium (Advanced Features)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Basic E-Commerce Platform
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Product management, basic checkout, payment gateway)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Discounts, product reviews, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Advanced product recommendations, analytics, 3-month support)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Advanced E-Commerce Platform
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Subscription-based, advanced product management)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Multi-currency, multi-language, 3-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (AI-powered marketing, integrations with third-party apps)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">📅 Appointment & Scheduling Solutions</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Basic (Essential Features)
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Standard (Best Value)
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Premium (Advanced Features)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Appointment Scheduler (Small Business)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Calendar view, reminders, online booking)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Payment system, automated reminders, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Multi-provider support, group scheduling, 3-month support)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Advanced Scheduling for Enterprises
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Advanced scheduling, team management)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Custom workflows, video conferencing integration)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      रु(AI scheduling assistant, multi-location support)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">📖 Learning Management Systems (LMS)</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Basic (Essential Features)
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Standard (Best Value)
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Premium (Advanced Features)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Basic LMS
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                     (Course creation, quizzes, user management)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                     (Live sessions, advanced reporting, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Custom course templates, gamification features)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Corporate LMS
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Employee training, certifications)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (AI-powered learning paths, progress tracking)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Gamified learning, content personalization)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🧑‍💻 Collaboration & Project Management Tools</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Basic (Essential Features)
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Standard (Best Value)
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Premium (Advanced Features)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Task Management Tool
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                     (Task creation, assignees, deadline tracking)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                     (Collaborative boards, time tracking)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                     (Advanced reporting, integrations, 2-month support)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Project Management Tool
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                     (Project timelines, team roles)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                     (Budget tracking, milestone setting)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Advanced Gantt charts, resource management)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🔐 Security & Authentication Solutions</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Basic (Essential Features)
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Standard (Best Value)
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Premium (Advanced Features)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Two-Factor Authentication (2FA)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (SMS/email verification)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (App-based authentication, reporting)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Biometric authentication, 3-month support)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Advanced Security Suite
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Firewall, anti-malware)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Intrusion detection, 2-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (AI-based threat analysis, 3-month support)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">💼 HR & Payroll Systems</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Basic (Essential Features)
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Standard (Best Value)
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Premium (Advanced Features)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Employee Management System
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Employee database, attendance tracking)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Payroll processing, reporting)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (HR analytics, advanced leave management)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Payroll & Benefits System
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Salary calculations, tax filing)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Benefits tracking, automated deductions)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Custom benefits, HR dashboard, 3-month support)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">📊 Data Analytics Solutions</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Basic (Essential Features)
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Standard (Best Value)
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Premium (Advanced Features)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Basic Analytics Dashboard
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Basic KPIs, data visualization)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Advanced filters, custom reports)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Real-time analytics, predictive modeling)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Advanced Data Analytics
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Big data processing, custom dashboards)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (AI insights, deep learning algorithms)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    (Real-time streaming analytics, 3-month support)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🌐 Cloud Hosting Solutions</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Basic (Essential Features)
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Standard (Best Value)
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Premium (Advanced Features)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Cloud Storage Solution
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (1 TB storage, basic security)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (3 TB storage, backup features)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Unlimited storage, encryption)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Cloud Infrastructure Management
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Load balancing, firewall)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Auto-scaling, monitoring)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    (AI-driven optimizations, 24/7 support)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">📧 Email Marketing Automation</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Basic (Essential Features)
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Standard (Best Value)
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Premium (Advanced Features)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Email Campaigns
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Email templates, automation)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (A/B testing, email segmentation)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Advanced analytics, personalization)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Advanced Email Marketing Platform
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Drip campaigns, CRM integration)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Automated workflows, multi-channel support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (AI-driven campaigns, 3-month support)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">📱 Mobile App Backend as a Service (BaaS)</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Basic (Essential Features)
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Standard (Best Value)
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Premium (Advanced Features)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Basic BaaS
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Authentication, database)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Push notifications, storage)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Data analytics, AI insights)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Advanced BaaS
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Custom APIs, advanced analytics)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (Multi-platform support, 3-month support)
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      (AI-driven features, 6-month support)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saas;
