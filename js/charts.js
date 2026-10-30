/* ==========================================================================
   Chart.js Configurations & Rendering
   IT LIVE Academy Admin Dashboard
   ========================================================================== */

import { store } from './store.js';
import { INITIAL_CHARTS_DATA } from './data.js';

let studentsBarChartInstance = null;
let categoryDoughnutChartInstance = null;
let revenueLineChartInstance = null;

// Analytics page chart instances
let analyticsEnrollmentChartInstance = null;
let analyticsRevenueChartInstance = null;

/**
 * Returns theme-dependent chart colors
 */
function getChartThemeColors() {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  return {
    gridColor: isLight ? 'rgba(15, 23, 42, 0.07)' : 'rgba(255, 255, 255, 0.06)',
    tickColor: isLight ? '#64748b' : '#8fa3cc',
    tooltipBg: isLight ? '#ffffff' : '#0d1b3d',
    tooltipText: isLight ? '#0f172a' : '#e8eefc',
    tooltipBorder: isLight ? 'rgba(15, 23, 42, 0.1)' : 'rgba(255, 255, 255, 0.15)',
    cardBg: isLight ? '#ffffff' : '#11224a'
  };
}

/**
 * Initialize all dashboard charts
 */
export function initDashboardCharts() {
  renderStudentsBarChart();
  renderCategoryDoughnutChart();
  renderRevenueLineChart();
}

/**
 * 1. Students Overview Bar Chart
 */
export function renderStudentsBarChart() {
  const canvas = document.getElementById('studentsOverviewChart');
  if (!canvas || typeof Chart === 'undefined') return;

  const ctx = canvas.getContext('2d');
  const theme = getChartThemeColors();
  const months = INITIAL_CHARTS_DATA.months;
  const dataValues = INITIAL_CHARTS_DATA.studentsOverview;

  if (studentsBarChartInstance) {
    studentsBarChartInstance.destroy();
  }

  studentsBarChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: months,
      datasets: [
        {
          label: 'Students Enrolled',
          data: dataValues,
          backgroundColor: '#2f6bff',
          hoverBackgroundColor: '#4f85ff',
          borderRadius: 6,
          borderSkipped: false,
          barPercentage: 0.55,
          categoryPercentage: 0.7
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 900,
        easing: 'easeOutQuart'
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: theme.tooltipBg,
          titleColor: theme.tooltipText,
          bodyColor: theme.tooltipText,
          borderColor: theme.tooltipBorder,
          borderWidth: 1,
          padding: 10,
          displayColors: false,
          callbacks: {
            label: (context) => ` ${context.parsed.y.toLocaleString()} Students`
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            color: theme.tickColor,
            font: { family: 'Inter', size: 12 }
          }
        },
        y: {
          min: 0,
          max: 1000,
          grid: {
            color: theme.gridColor,
            drawBorder: false
          },
          ticks: {
            stepSize: 250,
            color: theme.tickColor,
            font: { family: 'Inter', size: 11 },
            callback: (val) => val.toLocaleString()
          }
        }
      }
    }
  });
}

/**
 * 2. Courses by Category Doughnut Chart
 */
export function renderCategoryDoughnutChart() {
  const canvas = document.getElementById('categoryDoughnutChart');
  if (!canvas || typeof Chart === 'undefined') return;

  const ctx = canvas.getContext('2d');
  const theme = getChartThemeColors();
  const dist = store.getCategoryDistribution();

  if (categoryDoughnutChartInstance) {
    categoryDoughnutChartInstance.destroy();
  }

  categoryDoughnutChartInstance = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: dist.labels,
      datasets: [
        {
          data: dist.values,
          backgroundColor: dist.colors,
          borderColor: theme.cardBg,
          borderWidth: 3,
          hoverOffset: 4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '72%',
      animation: {
        animateScale: true,
        animateRotate: true,
        duration: 900
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: theme.tooltipBg,
          titleColor: theme.tooltipText,
          bodyColor: theme.tooltipText,
          borderColor: theme.tooltipBorder,
          borderWidth: 1,
          padding: 10,
          callbacks: {
            label: (context) => ` ${context.label}: ${context.parsed}%`
          }
        }
      }
    }
  });

  // Update HTML Custom Legend
  updateCustomLegend(dist);
}

function updateCustomLegend(dist) {
  const legendContainer = document.getElementById('categoryLegend');
  if (!legendContainer) return;

  legendContainer.innerHTML = dist.labels.map((label, i) => `
    <div class="legend-item">
      <div class="legend-color-label">
        <span class="legend-indicator" style="background-color: ${dist.colors[i]};"></span>
        <span>${label}</span>
      </div>
      <span class="legend-value">${dist.values[i]}%</span>
    </div>
  `).join('');
}

/**
 * 3. Revenue Overview Line Chart
 */
export function renderRevenueLineChart() {
  const canvas = document.getElementById('revenueLineChart');
  if (!canvas || typeof Chart === 'undefined') return;

  const ctx = canvas.getContext('2d');
  const theme = getChartThemeColors();
  const months = INITIAL_CHARTS_DATA.months;
  const revenueData = INITIAL_CHARTS_DATA.revenueOverview;

  // Create subtle blue gradient fill
  const gradient = ctx.createLinearGradient(0, 0, 0, 240);
  gradient.addColorStop(0, 'rgba(47, 107, 255, 0.35)');
  gradient.addColorStop(1, 'rgba(47, 107, 255, 0.01)');

  if (revenueLineChartInstance) {
    revenueLineChartInstance.destroy();
  }

  revenueLineChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: months,
      datasets: [
        {
          label: 'Monthly Revenue',
          data: revenueData,
          borderColor: '#2f6bff',
          borderWidth: 3,
          fill: true,
          backgroundColor: gradient,
          tension: 0.42,
          pointBackgroundColor: '#2f6bff',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6,
          pointHoverBackgroundColor: '#2f6bff',
          pointHoverBorderColor: '#ffffff'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 900,
        easing: 'easeOutQuart'
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: theme.tooltipBg,
          titleColor: theme.tooltipText,
          bodyColor: theme.tooltipText,
          borderColor: theme.tooltipBorder,
          borderWidth: 1,
          padding: 10,
          displayColors: false,
          callbacks: {
            label: (context) => ` $${context.parsed.y.toLocaleString()}`
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            color: theme.tickColor,
            font: { family: 'Inter', size: 12 }
          }
        },
        y: {
          min: 0,
          max: 30000,
          beginAtZero: true,
          grid: {
            color: theme.gridColor,
            drawBorder: false
          },
          ticks: {
            stepSize: 10000,
            color: theme.tickColor,
            font: { family: 'Inter', size: 11 },
            callback: (val) => {
              if (val === 0) return '$0';
              return `$${val / 1000}K`;
            }
          }
        }
      }
    }
  });
}

/**
 * Analytics Page Charts (with date filter)
 */
export function initAnalyticsCharts(days = 30) {
  const canvas1 = document.getElementById('analyticsEnrollmentChart');
  const canvas2 = document.getElementById('analyticsRevenueChart');
  if (!canvas1 || !canvas2 || typeof Chart === 'undefined') return;

  const theme = getChartThemeColors();

  let labels, enrollmentData, revenueData;
  if (days === 7) {
    labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    enrollmentData = [12, 19, 15, 25, 22, 30, 28];
    revenueData = [1400, 2100, 1800, 3200, 2800, 4100, 3900];
  } else if (days === 90) {
    labels = ['Month 1', 'Month 2', 'Month 3'];
    enrollmentData = [340, 480, 620];
    revenueData = [28000, 39000, 52000];
  } else {
    // 30 days
    labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
    enrollmentData = [85, 110, 140, 175];
    revenueData = [5800, 7200, 8900, 11400];
  }

  // Enrollment bar
  if (analyticsEnrollmentChartInstance) analyticsEnrollmentChartInstance.destroy();
  const ctx1 = canvas1.getContext('2d');
  analyticsEnrollmentChartInstance = new Chart(ctx1, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'New Registrations',
        data: enrollmentData,
        backgroundColor: '#8b5cf6',
        borderRadius: 6,
        barPercentage: 0.5
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: { ticks: { color: theme.tickColor } },
        y: { grid: { color: theme.gridColor }, ticks: { color: theme.tickColor } }
      }
    }
  });

  // Revenue line
  if (analyticsRevenueChartInstance) analyticsRevenueChartInstance.destroy();
  const ctx2 = canvas2.getContext('2d');
  const grad = ctx2.createLinearGradient(0, 0, 0, 240);
  grad.addColorStop(0, 'rgba(34, 197, 94, 0.35)');
  grad.addColorStop(1, 'rgba(34, 197, 94, 0.01)');

  analyticsRevenueChartInstance = new Chart(ctx2, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'Period Revenue',
        data: revenueData,
        borderColor: '#22c55e',
        backgroundColor: grad,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#22c55e',
        pointBorderColor: '#ffffff',
        pointRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: { ticks: { color: theme.tickColor } },
        y: {
          grid: { color: theme.gridColor },
          ticks: {
            color: theme.tickColor,
            callback: (v) => `$${v.toLocaleString()}`
          }
        }
      }
    }
  });
}

/**
 * Re-render all charts when theme changes
 */
export function refreshAllCharts() {
  renderStudentsBarChart();
  renderCategoryDoughnutChart();
  renderRevenueLineChart();
}
