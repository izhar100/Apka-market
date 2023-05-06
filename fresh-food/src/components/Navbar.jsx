import { Box, Checkbox, Flex, Image, Input, Select, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { IoSearchOutline, IoCartOutline, IoHeartOutline, IoPersonOutline, IoHome } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { Link, Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import filterPNG from "../assets/filters.png"
import { useDispatch } from 'react-redux';
import { getProducts } from '../redux/ProductReducer/action';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import { Radio, RadioGroup } from '@chakra-ui/react'
import logo from "../assets/logo.png"
const Navbar = () => {
    const [searchParam, setSearchParams] = useSearchParams()
    const initQuery = searchParam.get('q')
    const [query, setQuery] = useState(initQuery || "")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const initCategory = searchParam.getAll("category")
    const [category, setCategory] = useState(initCategory || [])
    const initOrder=searchParam.get("order")
    const [order, setOrder] = useState(initOrder || "")
    let ref = useRef()
    let paramObj = {
        params: {
            q: query && query
        }
    }
    useEffect(() => {
        setSearchParams(paramObj.params)
        if (ref.current) {
            clearTimeout(ref.current)
        }
        ref.current = setTimeout(() => {
            if (query) {
                dispatch(getProducts(paramObj))
            }
        }, 1000)
    }, [query])
    useEffect(() => {
        let params = {
            category,
        }
        order && (params.order=order)
        setSearchParams(params)
    }, [category,order])
    const handleQuery = (e) => {
        const { value } = e.target;
        setQuery(value)
        console.log(value)
    }
    const handleFilterIconClick = () => {
        navigate(`/product?${searchParam}`)
        setIsFilterModalOpen(true);
    };
    const handleClick = () => {
        navigate("/product")
    }
    const handleCategory = (e) => {
        const { value } = e.target;
        let allCategory = [...category]
        if (category.includes(value)) {
            allCategory = allCategory.filter((el) => el !== value)
        } else {
            allCategory.push(value)
        }
        setCategory(allCategory)
    }
    const handleApply = () => {
        setIsFilterModalOpen(false)
        if(category.length>0 || order){
            let allParams = {
                params: {
                    category,
                    _sort:"price",
                    _order:order,
                }
            }
            dispatch(getProducts(allParams))
        }

    }
    const handleSort = (e) => {
        const { value } = e.target;
        setOrder(value)
    }

    return (
        <>
            <Flex zIndex={1} bgColor={{ xl: "#defdff", lg: "#defdff", md: "#defdff", sm: "#defdff", sm: "GhostWhite", base: "GhostWhite" }} pl={"10px"} pr={"10px"} position={"fixed"} w={"100%"} h={"70px"} boxShadow={{ xl: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px", lg: " rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px", md: " rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px", sm: "", base: "" }} alignItems={"center"}>
                <Flex onClick={()=>navigate("/home")} display={{ lg: "flex", xl: "flex", md: "flex", sm: "none", base: "none" }} justifyContent={"center"} w={"15%"} height={"50px"} alignItems={"center"}>
                    <Image src={logo} w={"80%"}/>
                </Flex>
                <Flex flexDirection={"row-reverse"} w={{ lg: "60%", xl: "60%", md: "60%", sm: "100%", base: "100%" }} alignItems={"center"} pl={{ lg: "10px", xl: "10px", md: "10px", sm: "", base: "" }} justifyContent={"center"} m={{ lg: "", xl: "", md: "", sm: "auto", base: "auto" }}>
                    <Box position={"relative"} left={{ lg: "90%", xl: "90%", md: "90%", sm: "90%", base: "90%" }}></Box>
                    <Input value={query} placeholder="search any items..." pl={"40px"} border={"none"} borderRadius={"20px"} bgColor={"white"} onChange={handleQuery} w={"100%"} onClick={handleClick} />
                    <Box position={"relative"} left={{ lg: "90%", xl: "90%", md: "90%", sm: "86%", base: "86%" }}><Image src={filterPNG} w={"20px"} color="grey" onClick={handleFilterIconClick} _hover={{ cursor: "pointer" }} />
                        {/* filter modal start */}

                        <Modal isOpen={isFilterModalOpen} onClose={() => setIsFilterModalOpen(false)}>
                            <ModalOverlay />
                            <ModalContent w={"80%"}>
                                <ModalHeader>Filter & sort</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    {/* Add your filter options and form elements here */}
                                    <Text as={"b"}>Select Category</Text>
                                    <Flex flexDirection={"column"}>
                                        <Checkbox value={"fruits"} onChange={handleCategory} defaultChecked={category.includes("fruits")}>Fruits</Checkbox>
                                        <Checkbox value={"vegetables"} onChange={handleCategory} defaultChecked={category.includes("vegetables")}>Vegetables</Checkbox>
                                        <Checkbox value={"juice"} onChange={handleCategory} defaultChecked={category.includes("juice")}>Juice</Checkbox>
                                        <Checkbox value={"Dry fruits"} onChange={handleCategory} defaultChecked={category.includes("Dry fruits")}>Dry fruits</Checkbox>
                                    </Flex>
                                    <br />
                                    <Text as={"b"}>Select Price</Text>
                                    <RadioGroup defaultValue='2'>
                                        <Stack spacing={3} direction='column' onChange={handleSort}>
                                            <Radio colorScheme='red' name='order'value={"asc"} defaultChecked={order=="asc"}>
                                                Low to High
                                            </Radio>
                                            <Radio colorScheme='green' name='order'value={"desc"} defaultChecked={order=="desc"}>
                                                High to Low
                                            </Radio>
                                        </Stack>
                                    </RadioGroup>

                                </ModalBody>
                                <ModalFooter>
                                    <Button colorScheme="blue" mr={3} onClick={handleApply} >
                                        Apply
                                    </Button>
                                    <Button variant="ghost" onClick={() => setIsFilterModalOpen(false)}>
                                        Close
                                    </Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>

                        {/* filter modal end */}
                    </Box>
                </Flex>
                <Flex display={{ lg: "flex", xl: "flex", md: "flex", sm: "none", base: "none" }} pl={"20px"} justifyContent={"space-between"} alignItems={"center"} w={"25%"}>
                    <MdHome size="30px" onClick={() => navigate("/home")} style={{ cursor: "pointer" }} />
                    <IoHeartOutline size="30px" onClick={() => navigate("/favorite")} style={{ cursor: "pointer" }} />
                    <IoCartOutline size="30px" onClick={() => navigate("/cart")} style={{ cursor: "pointer" }} />
                    <IoPersonOutline size="30px" onClick={() => navigate("/profile")} style={{ cursor: "pointer" }} />
                </Flex>
            </Flex>
            <Box position={"fixed"} right={{ lg: "80%", xl: "80%", md: "77%", sm: "86%", base: "86%" }} top={"25px"}><IoSearchOutline size="20px" color="grey" /></Box>
            <br />
            <br />
            <br />
        </>
    )
}

export default Navbar
