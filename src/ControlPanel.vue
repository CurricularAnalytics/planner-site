<template>
  <div class="flex flex-col min-h-screen">
    <!-- Top Header -->
    <header class="bg-[#C8102E] text-white px-6 py-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="bg-white text-[#C8102E] rounded-full h-9 w-9 flex items-center justify-center font-bold">
          A
        </div>
        <span class="font-semibold text-[15px] uppercase">ADMINISTRATOR NAME</span>
      </div>
      <div class="text-[15px] font-medium">The University Of Arizona</div>
    </header>

    <div class="flex flex-1">
      <!-- Sidebar -->
      <aside class="w-64 bg-[#071D59] text-white min-h-screen flex flex-col">
        <div class="px-5 py-6 border-b border-[#132a69]">
          <div class="flex items-start gap-4">
            <div class="bg-[#C8102E] rounded-full h-10 w-10 flex items-center justify-center text-white font-bold shrink-0">
              A
            </div>
            <div class="leading-tight">
              <p class="text-[15px] font-semibold uppercase">Administrator</p>
              <p class="text-[15px] font-semibold uppercase">Name</p>
            </div>
          </div>
        </div>

        <nav class="flex-1 px-3 py-4">
          <button
            v-for="item in menu"
            :key="item"
            class="w-full text-left px-6 py-3.5 mb-2 rounded-xl text-[15px] font-medium transition-all"
            :class="
              activeSection === item
                ? 'bg-[#C8102E] text-white'
                : 'text-white hover:bg-[#102b74]'
            "
          >
            {{ item }}
          </button>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 bg-[#F3F4F6] px-10 py-8">
        <div class="mb-8">
          <h1 class="text-[28px] md:text-[34px] font-bold text-[#123B73]">
            System Control Panel
          </h1>
          <p class="text-gray-600 text-[18px] mt-2">
            Administrative overview with live security and system monitoring.
          </p>
        </div>

        <!-- Cards -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          <div
            v-for="card in statusCards"
            :key="card.title"
            class="rounded-2xl shadow-sm border border-gray-200 p-6 border-l-4"
            :class="[card.bgColor, card.borderColor]"
          >
            <div class="flex items-start gap-3">
              <div class="text-xl mt-[2px]">{{ card.icon }}</div>
              <div>
                <h3 class="text-[18px] font-semibold" :class="card.titleColor">
                  {{ card.title }}
                </h3>
                <p class="text-gray-600 mt-2 text-[15px]">
                  {{ card.subtitle }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Recent Login Attempts -->
        <section class="mb-10">
          <h2 class="text-[20px] md:text-[22px] font-bold text-[#123B73] mb-4">
            Recent Login Attempts
          </h2>

          <div class="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
            <div class="overflow-x-auto">
              <table class="w-full border-collapse">
                <thead class="bg-[#0C3C78] text-white">
                  <tr>
                    <th class="px-6 py-4 text-left text-[16px] font-semibold">User</th>
                    <th class="px-6 py-4 text-left text-[16px] font-semibold">IP Address</th>
                    <th class="px-6 py-4 text-left text-[16px] font-semibold">Time</th>
                    <th class="px-6 py-4 text-left text-[16px] font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(attempt, index) in recentLoginAttempts"
                    :key="index"
                    class="border-t border-gray-200 bg-white"
                  >
                    <td class="px-6 py-4 text-[15px] text-gray-700">{{ attempt.user }}</td>
                    <td class="px-6 py-4 text-[15px] text-gray-700">{{ attempt.ip }}</td>
                    <td class="px-6 py-4 text-[15px] text-gray-700">{{ attempt.time }}</td>
                    <td
                      class="px-6 py-4 text-[15px] font-semibold"
                      :class="attempt.status === 'Success' ? 'text-green-600' : 'text-red-600'"
                    >
                      {{ attempt.status }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <!-- Security Events -->
        <section>
          <h2 class="text-[20px] md:text-[22px] font-bold text-[#123B73] mb-4">
            Detected Security Events
          </h2>

          <div class="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
            <div class="overflow-x-auto">
              <table class="w-full border-collapse">
                <thead class="bg-[#0C3C78] text-white">
                  <tr>
                    <th class="px-6 py-4 text-left text-[16px] font-semibold">Event Type</th>
                    <th class="px-6 py-4 text-left text-[16px] font-semibold">IP Address</th>
                    <th class="px-6 py-4 text-left text-[16px] font-semibold">Attempts</th>
                    <th class="px-6 py-4 text-left text-[16px] font-semibold">Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(event, index) in securityEvents"
                    :key="index"
                    class="border-t border-gray-200 bg-white"
                  >
                    <td class="px-6 py-4 text-[15px] text-gray-700">{{ event.eventType }}</td>
                    <td class="px-6 py-4 text-[15px] text-gray-700">{{ event.ip }}</td>
                    <td class="px-6 py-4 text-[15px] text-gray-700">{{ event.attempts }}</td>
                    <td class="px-6 py-4 text-[15px] text-gray-700">{{ event.time }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const activeSection = ref("CONTROL PANEL");

const menu = [
  "CONTROL PANEL",
  "MANAGE WEBSITE",
  "MANAGE PLANNER",
  "MANAGE SERVICES",
  "SUPPORT",
  "CONTACTS",
  "SETTINGS",
  "SYSTEM ADMIN",
];

const statusCards = [
  {
    icon: "⚠️",
    title: "3 Security Alerts",
    subtitle: "Brute force or suspicious activity detected.",
    borderColor: "border-l-red-500",
    titleColor: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    icon: "💠",
    title: "System Health: Stable",
    subtitle: "All core services running normally.",
    borderColor: "border-l-blue-500",
    titleColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: "🔒",
    title: "Firewall Active",
    subtitle: "Web firewall actively blocking malicious IPs.",
    borderColor: "border-l-green-500",
    titleColor: "text-green-600",
    bgColor: "bg-green-50",
  },
];

const recentLoginAttempts = [
  {
    user: "advisor@arizona.edu",
    ip: "128.196.24.101",
    time: "11/30/2025 13:42",
    status: "Success",
  },
  {
    user: "student1@arizona.edu",
    ip: "198.51.100.22",
    time: "11/30/2025 13:10",
    status: "Success",
  },
  {
    user: "unknown",
    ip: "203.0.113.89",
    time: "11/30/2025 12:55",
    status: "Failed",
  },
];

const securityEvents = [
  {
    eventType: "Brute Force Attempt",
    ip: "203.0.113.89",
    attempts: 15,
    time: "11/30/2025 12:55",
  },
  {
    eventType: "Suspicious Login Location",
    ip: "178.45.33.190",
    attempts: 3,
    time: "11/29/2025 21:43",
  },
  {
    eventType: "Multiple Failed Logins",
    ip: "198.18.4.66",
    attempts: 7,
    time: "11/29/2025 17:22",
  },
];
</script>