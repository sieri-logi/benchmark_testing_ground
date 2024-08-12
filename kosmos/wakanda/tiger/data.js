window.BENCHMARK_DATA = {
  "lastUpdate": 1723470443382,
  "repoUrl": "https://github.com/sieri-logi/benchmark_testing_ground",
  "entries": {
    "Kosmos metrics / tiger board": [
      {
        "commit": {
          "author": {
            "email": "sieri@logitech.com",
            "name": "sieri-logi",
            "username": "sieri-logi"
          },
          "committer": {
            "email": "sieri@logitech.com",
            "name": "sieri-logi",
            "username": "sieri-logi"
          },
          "distinct": true,
          "id": "4306bd937c834d6a2b87dae67e85a93f2f886424",
          "message": "activate auto push",
          "timestamp": "2024-08-12T15:45:06+02:00",
          "tree_id": "591c672d38eff055d3a02f71d77ba4b000c147fc",
          "url": "https://github.com/sieri-logi/benchmark_testing_ground/commit/4306bd937c834d6a2b87dae67e85a93f2f886424"
        },
        "date": 1723470443093,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "pytestbox.device.hid.latency.performance.LatencyPerformance4kHzUSBTestCase.test_measure_break_latency_in_active_mode : The switch latency time : (average)",
            "value": 1625.4809999999998,
            "unit": "us",
            "extra": "minimum=1434.28us, maximum=1810.18us, 95_percentile=1764.346us, 99_percentile=1797.8446000000001us"
          },
          {
            "name": "pytestbox.device.hid.latency.performance.LatencyPerformance4kHzUSBTestCase.test_measure_break_latency_with_hybrid_switch_in_power_save_mode_in_active_mode : The switch latency time : (average)",
            "value": 402.7862,
            "unit": "us",
            "extra": "minimum=220.66us, maximum=559.26us, 95_percentile=530.347us, 99_percentile=555.4782000000001us"
          },
          {
            "name": "pytestbox.device.hid.latency.performance.LatencyPerformance4kHzUSBTestCase.test_measure_make_latency_default_switch_in_active_mode : The switch latency time : (average)",
            "value": 378.8962,
            "unit": "us",
            "extra": "minimum=232.3us, maximum=538.36us, 95_percentile=526.971us, 99_percentile=533.5486000000001us"
          },
          {
            "name": "pytestbox.device.hid.latency.performance.LatencyPerformance4kHzUSBTestCase.test_measure_make_latency_in_lift_mode : The switch latency time : (average)",
            "value": 387.82140000000004,
            "unit": "us",
            "extra": "minimum=244.12us, maximum=508.02000000000004us, 95_percentile=507.90000000000003us, 99_percentile=507.921us"
          },
          {
            "name": "pytestbox.device.hid.latency.performance.LatencyPerformance4kHzUSBTestCase.test_measure_make_latency_with_hybrid_switch_in_power_save_mode_in_active_mode : The switch latency time : (average)",
            "value": 399.59280000000007,
            "unit": "us",
            "extra": "minimum=224.34us, maximum=564.38us, 95_percentile=529.081us, 99_percentile=549.9062us"
          },
          {
            "name": "pytestbox.device.hid.latency.performance.LatencyPerformance4kHzUSBTestCase.test_x_motion_in_run_mode : The motion latency time : (average)",
            "value": 349.9229,
            "unit": "us",
            "extra": "minimum=163.52us, maximum=565.5us, 95_percentile=528.3380000000001us, 99_percentile=535.2622us"
          },
          {
            "name": "pytestbox.device.hid.latency.performance.LatencyPerformance4kHzUSBTestCase.test_y_motion_in_run_mode : The motion latency time : (average)",
            "value": 330.3431,
            "unit": "us",
            "extra": "minimum=160.20000000000002us, maximum=532.7us, 95_percentile=501.03us, 99_percentile=523.3098us"
          },
          {
            "name": "pytestbox.device.hid.mouse.displacement.performance.XYDisplacementReportRatePerformanceUSBTestCase.test_4kHz_report_rate_stability : The report rate : ",
            "value": 250,
            "unit": "us",
            "extra": "minimum=124.8us, maximum=500.3us, Delta on max=100.12us, Delta on min = 50.08us, standard deviation=8.2us"
          }
        ]
      }
    ]
  }
}