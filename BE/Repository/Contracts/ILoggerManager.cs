﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Contracts
{
    public interface ILoggerManager
    {
        void Info(string message);
        void Warn(string message);
        void Error(string message);
        void Debug(string message);
    }
}