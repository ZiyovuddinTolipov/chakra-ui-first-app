import { Box, SimpleGrid, Text } from "@chakra-ui/react";

export default function Dashboard() {
  const style = {
    contentBox: `bg-white h-[200px] border-2 border-black border-solid  text-center `,
    contentText:`text-pink-900 sm:text-pink-800 md:text-blue lg:text-green`
  }
  return (
    <SimpleGrid p="10px" columns={4} spacing={10} minChildWidth={250}>
      <Box className={style.contentBox}>
        <Text className={style.contentText} >Hello</Text>
      </Box>
      <Box className={style.contentBox}>
        <Text className={style.contentText}>Hello</Text>
      </Box>
      <Box className={style.contentBox}>
        <Text className={style.contentText}>Hello</Text>
      </Box>
      <Box className={style.contentBox}>
        <Text className={style.contentText}>Hello</Text>
      </Box>
      <Box className={style.contentBox}>
        <Text className={style.contentText}>Hello</Text>
      </Box>
      <Box className={style.contentBox}>
        <Text className={style.contentText}>Hello</Text>
      </Box>
      <Box className={style.contentBox}>
        <Text className={style.contentText}>Hello</Text>
      </Box>
      <Box className={style.contentBox}>
        <Text className={style.contentText}>Hello</Text>
      </Box>
      <Box className={style.contentBox}>
        <Text className={style.contentText}>Hello</Text>
      </Box>
      <Box className={style.contentBox}>
        <Text className={style.contentText}>Hello</Text>
      </Box>

    </SimpleGrid>
  )
}
