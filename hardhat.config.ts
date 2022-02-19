import { HardhatConfig } from "hardhat/types";

export default {
    networks: {
        hardhat: {
            mining: {
                auto: false,
                interval: [10000, 15000],
            }
        }
    }
} as HardhatConfig;
