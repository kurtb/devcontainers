# Use Ubuntu 22.04 LTS as base image
FROM ubuntu:22.04

# Avoid warnings by switching to noninteractive
ENV DEBIAN_FRONTEND=noninteractive

# Configure apt and install packages
RUN apt-get update \
    && apt-get -y install --no-install-recommends apt-utils dialog 2>&1 \
    #
    # Install essential packages
    && apt-get -y install \
        git \
        curl \
        wget \
        ca-certificates \
        gnupg \
        lsb-release \
        software-properties-common \
        build-essential \
        sudo \
        vim \
        nano \
        unzip \
        zip \
        jq \
        tree \
        htop \
        procps \
        lsof \
        net-tools \
        psmisc \
        rsync \
        openssh-client \
    #
    # Install Python 3.12 (latest stable version available in Ubuntu 22.04 repos)
    && add-apt-repository ppa:deadsnakes/ppa \
    && apt-get update \
    && apt-get -y install \
        python3.12 \
        python3.12-dev \
        python3.12-venv \
        python3-pip \
        python3-setuptools \
    #
    # Create python3 symlink to python3.12
    && update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.12 1 \
    && update-alternatives --install /usr/bin/python python /usr/bin/python3.12 1 \
    #
    # Install Node.js 22.x (LTS version)
    && curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash - \
    && apt-get -y install nodejs \
    #
    # Install yarn and pnpm
    && npm install -g yarn pnpm \
    #
    # Create a non-root user
    && groupadd --gid 1000 vscode \
    && useradd --uid 1000 --gid vscode --shell /bin/bash --create-home vscode \
    && echo vscode ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/vscode \
    && chmod 0440 /etc/sudoers.d/vscode \
    #
    # Clean up
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

# Switch back to dialog for any ad-hoc use of apt-get
ENV DEBIAN_FRONTEND=dialog

# Set the default user
USER vscode
WORKDIR /home/vscode

# Install common Python packages
RUN python3 -m pip install --user --upgrade pip \
    && python3 -m pip install --user \
        pipenv \
        poetry \
        virtualenv \
        requests \
        flask \
        fastapi \
        django \
        pytest \
        black \
        flake8 \
        pylint \
        mypy \
        jupyter \
        numpy \
        pandas

# Verify installations
RUN echo "=== Verification ===" \
    && node --version \
    && npm --version \
    && yarn --version \
    && pnpm --version \
    && python3 --version \
    && pip3 --version \
    && echo "=== Installation Complete ==="