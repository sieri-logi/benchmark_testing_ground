#!/usr/bin/env python
# -*- coding: utf-8 -*-
# ----------------------------------------------------------------------------------------------------------------------
# Benchmarking testing ground
# ----------------------------------------------------------------------------------------------------------------------
"""
:package: gen_test_results
:brief: Generate sample test results
:author: Sylvana Ieri <sieri@logitech.com>
:date: 2024/07/29
"""
import json
# ----------------------------------------------------------------------------------------------------------------------
# imports
# ----------------------------------------------------------------------------------------------------------------------
from random import Random

# ----------------------------------------------------------------------------------------------------------------------
# implementation
# ----------------------------------------------------------------------------------------------------------------------


def gen_test_results():
    results = [
        {
            "name": "total number of failures",
            "unit": "Failures",
            "value": 0,
        },
        {
            "name": "total number of tests",
            "unit": "Tests",
            "value": 14,
        },
        {
            "name": "time performance",
            "unit": "Seconds",
            "value": Random().randint(1, 100),
        }
    ]
    with open("test_results.json", "w") as f:
        json.dump(results, f)
    # end with
# end def gen_test_results

if __name__ == '__main__':
    gen_test_results()
# end if


# ----------------------------------------------------------------------------------------------------------------------
# END OF FILE
# ----------------------------------------------------------------------------------------------------------------------
