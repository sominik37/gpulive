export type Status = "available" | "limited" | "unavailable";

export interface Instance {
  id: string;
  name: string;
  gpus: number;
  gpuType: string;
  vram: string;
  vcpus: number;
  ram: string;
  storage: string;
  price: number;
  status: Status;
}

export const INVENTORY: Instance[] = [
  { id: "h200-2x", name: "10x NVIDIA H200", gpus: 10, gpuType: "H200", vram: "1.4TB", vcpus: 640, ram: "5TB", storage: "50TB NVMe", price: 2.2, status: "available" },
  { id: "h100-8x", name: "8x H100 SXM5", gpus: 8, gpuType: "H100", vram: "640GB", vcpus: 208, ram: "2TB", storage: "15TB NVMe", price: 24.99, status: "available" },
  { id: "a100-8x", name: "8x A100 SXM4", gpus: 8, gpuType: "A100", vram: "640GB", vcpus: 192, ram: "1.5TB", storage: "10TB NVMe", price: 14.99, status: "available" },
  { id: "a100-4x", name: "4x A100 PCIe", gpus: 4, gpuType: "A100", vram: "320GB", vcpus: 96, ram: "768GB", storage: "5TB NVMe", price: 7.56, status: "limited" },
  { id: "a100-1x", name: "1x A100 PCIe", gpus: 1, gpuType: "A100", vram: "80GB", vcpus: 24, ram: "192GB", storage: "1TB NVMe", price: 1.89, status: "available" },
  { id: "a6000-4x", name: "4x RTX A6000", gpus: 4, gpuType: "RTX A6000", vram: "192GB", vcpus: 64, ram: "512GB", storage: "4TB NVMe", price: 4.80, status: "unavailable" },
  { id: "a6000-1x", name: "1x RTX A6000", gpus: 1, gpuType: "RTX A6000", vram: "48GB", vcpus: 16, ram: "128GB", storage: "1TB NVMe", price: 1.20, status: "available" },
  { id: "4090-4x", name: "4x RTX 4090", gpus: 4, gpuType: "RTX 4090", vram: "96GB", vcpus: 48, ram: "256GB", storage: "2TB NVMe", price: 3.16, status: "limited" },
  { id: "4090-1x", name: "1x RTX 4090", gpus: 1, gpuType: "RTX 4090", vram: "24GB", vcpus: 12, ram: "64GB", storage: "500GB NVMe", price: 0.79, status: "available" },
  { id: "a5000-1x", name: "1x RTX A5000", gpus: 1, gpuType: "RTX A5000", vram: "24GB", vcpus: 8, ram: "48GB", storage: "500GB NVMe", price: 0.65, status: "available" },
  { id: "a4000-1x", name: "1x RTX A4000", gpus: 1, gpuType: "RTX A4000", vram: "16GB", vcpus: 8, ram: "32GB", storage: "500GB NVMe", price: 0.45, status: "available" },
];
