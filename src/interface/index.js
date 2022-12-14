import libraryAbi from "./zuniswaplibrary.json";
import sliceAbi from "./slice.json";
import paysliceAbi from "./payslice.json";
import exchangeAbi from "./exchange.json";
import loggerAbi from "./logger.json";
import forwarderAbi from "./forwarder.json";


const SliceInterface = {
    address: "",
    abi: sliceAbi.abi
}

const ExchangeInterface = {
    address: exchangeAbi.address,
    abi: exchangeAbi.abi
}

const PaysliceInterface = {
    address: paysliceAbi.address,
    abi: paysliceAbi.abi
}

const ZuniswapV2LibraryInterface = {
    address: "0x07D4554f82caacCB720e8F8DC1F40A4D86D40A04",
    abi: libraryAbi.abi
}

const ForwarderInterface = {
    address: forwarderAbi.address,
    abi: forwarderAbi.abi
}

const loggerInterface = {
    address: "",
    abi: loggerAbi.abi
}

export {SliceInterface, ZuniswapV2LibraryInterface, PaysliceInterface, ExchangeInterface,ForwarderInterface, loggerInterface}