# 📊 Server-Stats: Lightweight System Monitor

A lightweight **Bash script** designed to give you an instant snapshot of your Linux server's health. It provides real-time data on CPU, Memory, Disk usage, and identifies resource-hungry processes.

## 🚀 Features
* **Real-time CPU Usage**: Calculates actual CPU load by sampling `/proc/stat`.
* **Memory Analysis**: Breaks down used vs. available RAM in GB/MB.
* **Disk Monitoring**: Aggregates usage across all physical `/dev/` drives.
* **Process Tracking**: Lists the Top 5 processes consuming CPU and Memory.
* **Color-Coded Output**: Easy-to-read terminal interface.

---

## 🛠️ Bash Concepts Used

This script leverages several core Linux and Bash concepts to fetch and process data:

### 1. Data Extraction with `awk`
Instead of just printing files, we use `awk` to perform math and filter text.
* **Calculations**: We use `awk` to add columns in `/proc/stat` to find the total CPU time.
* **Formatting**: We created a custom function `convert_mem()` inside `awk` to change raw Kilobytes into human-readable MB and GB.

### 2. Using the `/proc` Virtual Filesystem
Instead of relying on heavy external tools, the script reads directly from Linux "pseudo-files."
* `/proc/stat`: Provides kernel/system statistics (CPU ticks).
* `/proc/meminfo`: Contains detailed RAM usage statistics.

### 3. Delays for Accuracy
To calculate CPU percentage, the script captures a "snapshot," waits for 1 second using `sleep 1`, and takes a second snapshot. The difference between these two tells us the true activity level during that window.

### 4. Pipeline Processing
We use **pipes (`|`)** to pass data between commands. For example:
`df -k | grep '^/dev/' | awk ...`
This takes the disk info, filters for physical drives only, and then sends that specific list to `awk` for totaling.

---

## 💻 How to Use

### 1. Create the file
Open your terminal and create a new file using **Vim**:
```bash
vim server-stats

### 2. Paste the Code
To add your script to the file, follow these steps using the **Vim** editor:
* Press `i` to enter **Insert Mode** (you will see `-- INSERT --` at the bottom).
* **Paste** your script code into the terminal.
* Press `Esc` to exit Insert Mode.
* Type `:wq` (which stands for **write** and **quit**) and hit `Enter` to save and exit.

### 3. Make it Executable
In Linux, scripts need specific permissions to run. Use the `chmod` (change mode) command to make your script executable:

```bash
chmod +x server-stats

### 4. Run the Script
Execute it directly from your terminal:

```bash
./server-stats.sh

Welcome user! Here are your system stats

Total CPU Usage: 12.45%

--- Memory Usage ---

Memory Used: 2.40 GB (30%)
Available Memory: 5.60 GB (70%)

--- Disk Usage ---

Total space: 100.00GB
Used space: 45.50GB (45.5%)
Free space: 54.50GB (54.5%)

--- Top 5 High CPU Usage Processes ---

%CPU  COMMAND         PID
5.0   chrome          1234
2.1   code            5678
1.8   systemd         1
0.9   vim             8821
0.5   network-manager 432

---

## 📝 Requirements

To run this script, your system needs the following (most are included by default in nearly every Linux environment):

| Requirement | Description |
| :--- | :--- |
| **OS** | Any Linux distribution (Ubuntu, Debian, CentOS, RHEL, Arch, etc.) |
| **Shell** | `bash` (The script uses Bash-specific arrays and math) |
| **Utilities** | `awk`, `grep`, `ps`, and `df` |
| **Permissions** | Execute permissions (`chmod +x`) and read access to `/proc` |

---

### 🛡️ System Access
The script reads from the `/proc` directory. This is a "virtual" filesystem the Linux kernel uses to share process and system information. No `sudo` or root privileges are required for basic stats, making it safe to run as a standard user.

---

<p align="center">
  <i>Created with 🐧 for Linux Sysadmins</i>
</p>